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
  givenResponses: GivenResponseModel[]; // Make it optional if it can be undefined
  game: GameModel;
}

export default function Score({ givenResponses, game }: ScoreProps) {
  const getScore = (): string => {
    const rightResponses = givenResponses.filter(
      (givenResponse) =>
        givenResponse.reponse ===
        (game.levels[givenResponse.levelIndex].content as QuizModel)
          .correct_response
    );

    return `${rightResponses.length} / ${givenResponses.length}`;
  };

  return (
    <Container>
      <Header>
        <Title>Score</Title>
        <CorrectAnswerRate>{getScore()}</CorrectAnswerRate>
      </Header>

      <ResponsesHeader />
      {givenResponses.map((givenResponse, index) => (
        <Response
          key={index}
          responseIndex={index}
          level={game?.levels[givenResponse.levelIndex]}
          givenResponse={givenResponse}
        />
      ))}
    </Container>
  );
}
