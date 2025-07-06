"use client";

import {
  GameModel,
  GivenResponseModel,
  LevelModel,
  QuizModel,
} from "../../models";
import Response from "./Response/response";
import ResponsesHeader from "./ResponsesHeader/responsesHeader";
import { Container, CorrectAnswerRate, Header, Title } from "./styles";

interface ScoreProps {
  givenResponses: GivenResponseModel[];
  game: any;
}

export default function Score({ givenResponses, game }: ScoreProps) {
  // Filtra apenas as fases do tipo "quiz"
  const quizPhases =
    game?.phases?.filter((phase: any) => phase.type === "quiz") || [];

  // Garante que todas as fases do tipo quiz estejam representadas no score
  const allQuizResponses = quizPhases.map((phase: any, idx: number) => {
    // Busca o index real da fase no array original
    const realIndex = game.phases.findIndex((p: any) => p.id === phase.id);
    const resp = givenResponses.find((r) => r.levelIndex === realIndex);
    return (
      resp || {
        levelIndex: realIndex,
        reponse: null,
      }
    );
  });

  const getScore = (): string => {
    const rightResponses = allQuizResponses.filter(
      (givenResponse) =>
        givenResponse.reponse ===
        (game.phases[givenResponse.levelIndex]?.correctResponse ?? null)
    );
    return `${rightResponses.length} / ${allQuizResponses.length}`;
  };

  return (
    <Container>
      <Header>
        <Title>Score</Title>
        <CorrectAnswerRate>{getScore()}</CorrectAnswerRate>
      </Header>

      <ResponsesHeader />
      {allQuizResponses.map((givenResponse, index) => (
        <Response
          key={index}
          responseIndex={index}
          level={game?.phases[givenResponse.levelIndex]}
          givenResponse={givenResponse}
        />
      ))}
    </Container>
  );
}
