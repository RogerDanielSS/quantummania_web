"use client";

import { useState } from "react";
import { GivenResponseModel, LevelModel, QuizModel } from "../../../models";
import { CenteredDiv, Container } from "./styles";
import Quiz from "../../quiz/quiz";
import ResponseJustification from "../../responseJustification/responseJustification";

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
          (level as any).correctResponse === givenResponse.reponse
        }
      >
        <CenteredDiv>Q{responseIndex + 1}</CenteredDiv>
        <CenteredDiv>{(level as any).correctResponse}</CenteredDiv>
        <CenteredDiv>{givenResponse.reponse}</CenteredDiv>
      </Container>
      {showQuiz && (
        <>
          <Quiz
            level={level}
            showRightResponse
            preSettedGivenResponse={givenResponse.reponse}
          />
          {(level as any)?.responseJustification && (
            <ResponseJustification
              justification={(level as any)?.responseJustification}
            />
          )}
        </>
      )}
    </>
  );
}
