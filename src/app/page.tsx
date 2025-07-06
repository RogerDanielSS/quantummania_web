"use client";

import Link from "next/link";
import Card from "./components/cardTutorial";
import MembroEquipe from "./components/membroEquipe";
import {
  HeroSection,
  MainTitle,
  Subtitle,
  SectionTitle,
  Divider,
  TutorialSection,
  CardsContainer,
  TeamSection,
} from "./styles";
import { TUTORIAL_LEVEL_1 } from "./constants/tutorial_level_1";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState<any | null>(null);
  const [levels, setLevels] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Buscar levels da API ao carregar a página
    axios
      .get("http://localhost:3001/session/levels")
      .then((res) => {
        setLevels(res.data);
        console.log("Levels:", res.data);
      })
      .catch(() => setLevels([]));
  }, []);

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    if (!userJson) return;
    try {
      const user = JSON.parse(userJson);
      console.log("User:", user);
      if (!user?.id) return;
      axios
        .get(`http://localhost:3001/session/current-phase/${user.id}`)
        .then((res) => setCurrentPhase(res.data))
        .catch(() => setCurrentPhase(null));
    } catch {
      setCurrentPhase(null);
    }
  }, []);

  return (
    <>
      <HeroSection>
        <MainTitle>Quantummania</MainTitle>
        <Subtitle>
          Um site para aprendizagem de circuitos quânticos feito de estudantes
          para estudantes
        </Subtitle>
      </HeroSection>

      <div>
        <div>
          <SectionTitle>Tutorial</SectionTitle>
          <Divider />
        </div>
        <TutorialSection>
          <CardsContainer>
            <Link
              href="/gameplay"
              onClick={async (e) => {
                e.preventDefault();
                const userJson = localStorage.getItem("user");
                const level = levels.find((level) => level.name === "Basic");
                if (userJson && level) {
                  localStorage.setItem("selectedLevel", JSON.stringify(level));
                  try {
                    const user = JSON.parse(userJson);
                    // Busca o progresso do usuário para o level selecionado
                    const res = await axios.get(
                      `http://[::1]:3001/session/progress/${user.id}`
                    );
                    // O backend retorna: { "basic": { ...fase } }
                    let phaseIndex = 0;
                    const progress = res.data;
                    if (
                      progress &&
                      progress[level.id] &&
                      progress[level.id].id
                    ) {
                      // Busca o index da fase salva no array de phases do level selecionado
                      const phaseId = progress[level.id].id;
                      const idx = level.phases.findIndex(
                        (phase: any) => phase.id === phaseId
                      );
                      phaseIndex = idx !== -1 ? idx : 0;
                    }
                    localStorage.setItem(
                      "currentPhase",
                      JSON.stringify(phaseIndex)
                    );
                    alert(
                      `Você parou na fase ${phaseIndex + 1} do nível Básico.`
                    );
                  } catch {
                    localStorage.setItem("currentPhase", "0");
                    alert("Você está começando do início do nível Básico.");
                  }
                  router.push("/gameplay");
                }
              }}
            >
              <Card
                numeroCard="01"
                nivelCard="Básico"
                descricaoCard={
                  levels.find((level) => level.name === "Basic")?.description ||
                  ""
                }
              />
            </Link>
            <Link
              href="/gameplay"
              onClick={async (e) => {
                e.preventDefault();
                const userJson = localStorage.getItem("user");
                const level = levels.find(
                  (level) => level.name === "Intermediate"
                );
                if (userJson && level) {
                  localStorage.setItem("selectedLevel", JSON.stringify(level));
                  try {
                    const user = JSON.parse(userJson);
                    // Busca o progresso do usuário para o level selecionado
                    const res = await axios.get(
                      `http://[::1]:3001/session/progress/${user.id}`
                    );
                    let phaseIndex = 0;
                    const progress = res.data;
                    if (
                      progress &&
                      progress[level.id] &&
                      progress[level.id].id
                    ) {
                      const phaseId = progress[level.id].id;
                      const idx = level.phases.findIndex(
                        (phase: any) => phase.id === phaseId
                      );
                      phaseIndex = idx !== -1 ? idx : 0;
                    }
                    localStorage.setItem(
                      "currentPhase",
                      JSON.stringify(phaseIndex)
                    );
                    alert(
                      `Você parou na fase ${
                        phaseIndex + 1
                      } do nível Intermediário.`
                    );
                  } catch {
                    localStorage.setItem("currentPhase", "0");
                    alert(
                      "Você está começando do início do nível Intermediário."
                    );
                  }
                  router.push("/gameplay");
                }
              }}
            >
              <Card
                numeroCard="02"
                nivelCard="Intermediário"
                descricaoCard={
                  levels.find((level) => level.name === "Intermediate")
                    ?.description || "oi"
                }
              />
            </Link>
          </CardsContainer>
        </TutorialSection>
      </div>

      <div>
        <SectionTitle>Quem somos nós</SectionTitle>
        <Divider style={{ width: "32rem" }} />
      </div>
      <TeamSection>
        <MembroEquipe
          nomeMembro="Estêvão"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Guilherme"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="John"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Jonathan"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Leticia"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Roger"
          githubUrl="https://github.com/RogerDanielSS"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Thiago"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Vinícius"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
      </TeamSection>
    </>
  );
}
