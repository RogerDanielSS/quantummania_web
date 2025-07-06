"use client";

import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { GameModel, GivenResponseModel } from "../models";
import { TUTORIAL_LEVEL_1 } from "../constants/tutorial_level_1";
import Quiz from "../components/quiz/quiz";
import Explanation from "../components/explanation/explanation";
import Navbar from "../components/navBar/navBar";
import Score from "../components/score.ts/score";
import { GameContext } from "../contexts";
import axios from "axios";

export default function Home() {
  const { currentGame } = useContext(GameContext);
  console.log(currentGame);

  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [givenResponses, setGivenResponses] = useState<GivenResponseModel[]>(
    []
  );
  const [currentPhase, setCurrentPhase] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<any>(null);

  // Ao iniciar, use currentPhase do localStorage apenas uma vez
  useEffect(() => {
    // setGame(TUTORIAL_LEVEL_1);

    // Carregar dados do currentPhase do localStorage ao iniciar a página
    const currentPhaseJson = localStorage.getItem("currentPhase");
    let initialPhase = 0;
    if (currentPhaseJson) {
      try {
        const phase = JSON.parse(currentPhaseJson);
        if (typeof phase === "number") {
          initialPhase = phase;
        }
      } catch (e) {
        // ignore
      }
    }
    setCurrentLevelIndex(initialPhase);

    // Carregar o selectedLevel do localStorage ao iniciar a página
    const selectedLevelJson = localStorage.getItem("selectedLevel");
    if (selectedLevelJson) {
      try {
        const selectedLevel = JSON.parse(selectedLevelJson);
        setSelectedLevel(selectedLevel);

        // Buscar progresso do backend para o usuário e o level selecionado
        const userJson = localStorage.getItem("user");
        if (userJson && selectedLevel?.id) {
          const user = JSON.parse(userJson);
          if (user?.id) {
            axios
              .get(`http://[::1]:3001/session/progress/${user.id}`)
              .then((res) => {
                // Exemplo de retorno: { "basic": { ...fase } }
                const progress = res.data;
                const phaseObj = progress[selectedLevel.id];
                if (phaseObj && selectedLevel.phases) {
                  // Procura o index da fase salva dentro do array de phases do level selecionado
                  const phaseIndex = selectedLevel.phases.findIndex(
                    (phase: any) => phase.id === phaseObj.id
                  );
                  setCurrentLevelIndex(phaseIndex !== -1 ? phaseIndex : 0);
                } else {
                  setCurrentLevelIndex(0);
                }
              })
              .catch(() => setCurrentLevelIndex(0));
          }
        }
      } catch (e) {
        setSelectedLevel(null);
        setCurrentLevelIndex(0);
      }
    }
  }, []);

  // Atualize o localStorage e o backend sempre que currentLevelIndex mudar (para persistência)
  useEffect(() => {
    localStorage.setItem("currentPhase", JSON.stringify(currentLevelIndex));

    // Salvar progresso no backend
    const userJson = localStorage.getItem("user");
    const selectedLevelJson = localStorage.getItem("selectedLevel");
    if (userJson && selectedLevelJson) {
      try {
        const user = JSON.parse(userJson);
        const selectedLevel = JSON.parse(selectedLevelJson);
        const phaseId =
          selectedLevel?.phases?.[currentLevelIndex]?.id ??
          selectedLevel?.phases?.[selectedLevel.phases.length - 1]?.id;

        if (user?.id && selectedLevel?.id && phaseId) {
          axios.post(
            "http://localhost:3001/session/set-current-phase-by-level",
            {
              userId: user.id,
              levelId: selectedLevel.id,
              phaseId: phaseId,
            }
          );
        }
      } catch (e) {
        // ignore
      }
    }
  }, [currentLevelIndex]);

  // Carregar respostas salvas do localStorage por level ao iniciar
  useEffect(() => {
    const selectedLevelJson = localStorage.getItem("selectedLevel");
    if (selectedLevelJson) {
      try {
        const selectedLevel = JSON.parse(selectedLevelJson);
        setSelectedLevel(selectedLevel);

        // Respostas salvas por level
        const savedResponses = localStorage.getItem(
          `givenResponses_${selectedLevel.id}`
        );
        if (savedResponses) {
          // Filtra respostas para garantir que só as do level atual sejam usadas
          const parsedResponses = JSON.parse(savedResponses);
          const validResponses = Array.isArray(parsedResponses)
            ? parsedResponses.filter(
                (resp) =>
                  typeof resp.levelIndex === "number" &&
                  selectedLevel.phases[resp.levelIndex]
              )
            : [];
          setGivenResponses(validResponses);
        } else {
          setGivenResponses([]);
        }
      } catch {
        setSelectedLevel(null);
        setGivenResponses([]);
      }
    }
  }, []);

  // Salvar respostas no localStorage sempre que mudar, por level
  useEffect(() => {
    if (selectedLevel?.id) {
      // Salva apenas respostas válidas para o level atual
      const validResponses = givenResponses.filter(
        (resp) =>
          typeof resp.levelIndex === "number" &&
          selectedLevel.phases[resp.levelIndex]
      );
      localStorage.setItem(
        `givenResponses_${selectedLevel.id}`,
        JSON.stringify(validResponses)
      );
    }
  }, [givenResponses, selectedLevel]);

  const onGoFurther = async (givenResponse?: string): Promise<void> => {
    let updatedResponses = givenResponses;
    if (givenResponse) {
      // Atualiza ou adiciona a resposta para o índice atual
      const existingIndex = givenResponses.findIndex(
        (resp) => resp.levelIndex === currentLevelIndex
      );
      if (existingIndex !== -1) {
        updatedResponses = [
          ...givenResponses.slice(0, existingIndex),
          { levelIndex: currentLevelIndex, reponse: givenResponse },
          ...givenResponses.slice(existingIndex + 1),
        ];
      } else {
        updatedResponses = [
          ...givenResponses,
          { levelIndex: currentLevelIndex, reponse: givenResponse },
        ];
      }
      setGivenResponses(updatedResponses);
    }

    // Salvar progresso no backend ANTES de avançar
    const userJson = localStorage.getItem("user");
    const selectedLevelJson = localStorage.getItem("selectedLevel");
    if (userJson && selectedLevelJson) {
      try {
        const user = JSON.parse(userJson);
        const selectedLevel = JSON.parse(selectedLevelJson);
        const phaseId =
          selectedLevel?.phases?.[currentLevelIndex]?.id ??
          selectedLevel?.phases?.[selectedLevel.phases.length - 1]?.id;

        if (user?.id && selectedLevel?.id && phaseId) {
          await axios.post(
            "http://[::1]:3001/session/set-current-phase-by-level",
            {
              userId: user.id,
              levelId: selectedLevel.id,
              phaseId: phaseId,
            }
          );
        }
      } catch (e) {
        // ignore
      }
    }

    setCurrentLevelIndex((prev) => prev + 1);
  };

  const onGoBack = (): void => {
    if (currentLevelIndex > 0) setCurrentLevelIndex(currentLevelIndex - 1);
  };

  // Garante que o Score sempre mostre todas as fases, mesmo que o usuário tenha parado no meio
  const allPhasesResponses = selectedLevel?.phases
    ? selectedLevel.phases.map((_: any, idx: number) => {
        const resp = givenResponses.find((r) => r.levelIndex === idx);
        return (
          resp || {
            levelIndex: idx,
            reponse: null,
          }
        );
      })
    : [];

  return (
    <div className="min-h-screen">
      <Head>
        <title>{selectedLevel?.phases[currentLevelIndex]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        {/* Exibe Score se terminou todas as fases */}
        {selectedLevel && currentLevelIndex >= selectedLevel.phases.length && (
          <Score game={selectedLevel} givenResponses={allPhasesResponses} />
        )}

        {selectedLevel &&
          currentLevelIndex < selectedLevel.phases.length &&
          selectedLevel?.phases[currentLevelIndex]?.type === "explanation" && (
            <Explanation
              level={selectedLevel?.phases[currentLevelIndex]}
              onGoFurther={onGoFurther}
            />
          )}
        {selectedLevel &&
          currentLevelIndex < selectedLevel.phases.length &&
          selectedLevel?.phases[currentLevelIndex]?.type === "quiz" && (
            <Quiz
              level={selectedLevel?.phases[currentLevelIndex]}
              onGoFurther={onGoFurther}
            />
          )}
      </main>
    </div>
  );
}
