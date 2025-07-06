import { useState } from "react";
import Image from "next/image";
import { LevelModel, QuizModel } from "../../models";
import {
  AnswerButton,
  AnswersContainer,
  Content,
  ExplicitResponseDiv,
  Header,
  ImageContainer,
  NextButton,
  NextButtonContainer,
  QuizCard,
  QuizContainer,
  TextContainer,
  Text,
  Title,
} from "./styles";

interface QuizProps {
  onGoFurther?: (givenResponse: string) => void;
  level?: any;
  showRightResponse?: boolean;
  preSettedGivenResponse?: string;
}

function bytesObjectToBase64(bytesObj: Record<string, number>): string {
  const byteArray = Object.values(bytesObj);
  const uint8Array = new Uint8Array(byteArray);
  if (typeof window !== "undefined") {
    // Navegador
    let binary = "";
    uint8Array.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  } else {
    // Node.js (SSR)
    // @ts-ignore
    return Buffer.from(uint8Array).toString("base64");
  }
}

export default function Quiz({
  level,
  onGoFurther,
  showRightResponse,
  preSettedGivenResponse,
}: QuizProps) {
  const [givenResponse, setGivenResponse] = useState<string | null>(
    preSettedGivenResponse || null
  );

  // Atualiza o currentPhase no localStorage sempre que o componente renderizar
  // e o level existir dentro de selectedLevel.phases
  // Espera-se que o index seja passado via prop ou contexto, mas aqui vamos buscar pelo selectedLevel do localStorage

  // Atualiza o currentPhase no localStorage
  if (typeof window !== "undefined" && level) {
    const selectedLevelJson = localStorage.getItem("selectedLevel");
    if (selectedLevelJson) {
      try {
        const selectedLevel = JSON.parse(selectedLevelJson);
        if (selectedLevel?.phases && Array.isArray(selectedLevel.phases)) {
          const phaseIndex = selectedLevel.phases.findIndex(
            (phase: any) => phase.id === level.id
          );
          if (phaseIndex !== -1) {
            localStorage.setItem("currentPhase", JSON.stringify(phaseIndex));
          }
        }
      } catch (e) {
        // ignore
      }
    }
  }

  return (
    <QuizContainer $isSubPage={showRightResponse}>
      <Header>
        <Title>{level?.title}</Title>
      </Header>

      <QuizCard>
        <Content>
          <TextContainer>
            <Text>
              {((level?.text as string) || "").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </Text>
          </TextContainer>

          {level?.image && typeof level.image === "object" && (
            <ImageContainer
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={`data:image/png;base64,${bytesObjectToBase64(
                  level.image
                )}`}
                alt="Qubit state 0"
                height={300}
                width={300}
                style={{ display: "block", margin: "0 auto" }}
              />
            </ImageContainer>
          )}
        </Content>

        <AnswersContainer>
          {level?.possibleResponses?.map((response: string, index: number) => {
            if (showRightResponse)
              return (
                <ExplicitResponseDiv
                  key={index}
                  $isRightResponse={level.correctResponse === response}
                  $isGivenResponse={preSettedGivenResponse === response}
                  onClick={(): void => setGivenResponse(response)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  {response}
                </ExplicitResponseDiv>
              );

            return (
              <AnswerButton
                key={index}
                $isSelected={givenResponse === response}
                onClick={(): void => setGivenResponse(response)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                {response}
              </AnswerButton>
            );
          })}
        </AnswersContainer>
      </QuizCard>

      {!showRightResponse && onGoFurther && (
        <NextButtonContainer>
          <NextButton
            disabled={givenResponse === null}
            onClick={(): void => {
              if (givenResponse !== null) {
                setGivenResponse(null);
                onGoFurther(givenResponse);
              }
            }}
          >
            Avançar
          </NextButton>
        </NextButtonContainer>
      )}
    </QuizContainer>
  );
}
