"use client";

import { useState } from "react";
import { GivenResponseModel, LevelModel, QuizModel } from "../../../models";
import { CenteredDiv, Container } from "./styles";
import Quiz from "../../quiz/quiz";

interface ResponseProps {
  givenResponse: GivenResponseModel;
  responseIndex: number;
  level?: LevelModel;
}

export default function Response({
  givenResponse,
  responseIndex,
  level,
}: ResponseProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const toggleShowQuiz = (): void => {
    setShowQuiz(!showQuiz);
  };

  return (
    <>
      <Container
        onClick={toggleShowQuiz}
        $correctResponse={
          (level?.content as QuizModel).correct_response ===
          givenResponse.reponse
        }
      >
        <CenteredDiv>Q{responseIndex + 1}</CenteredDiv>
        <CenteredDiv>
          {(level?.content as QuizModel).correct_response}
        </CenteredDiv>
        <CenteredDiv>{givenResponse.reponse}</CenteredDiv>
      </Container>
      {showQuiz && (
        <Quiz
          level={level}
          showRightResponse
          preSettedGivenResponse={givenResponse.reponse}
        />
      )}
    </>
  );
}
