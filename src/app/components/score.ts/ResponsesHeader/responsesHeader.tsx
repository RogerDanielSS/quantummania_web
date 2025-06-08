"use client";

import { useState } from "react";
import { CenteredDiv, Container } from "./styles";
import Quiz from "../../quiz/quiz";

export default function ResponsesHeader() {
  const [showQuiz, setShowQuiz] = useState(false);
  const toggleShowQuiz = (): void => {
    setShowQuiz(!showQuiz);
  };

  return (
    <>
      <Container>
        <CenteredDiv>Questão</CenteredDiv>
        <CenteredDiv>Resposta certa</CenteredDiv>
        <CenteredDiv>Resposta dada</CenteredDiv>
      </Container>
    </>
  );
}
