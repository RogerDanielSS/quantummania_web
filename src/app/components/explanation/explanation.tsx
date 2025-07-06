"use client";

import Image from "next/image";
import { ExplanationModel, LevelModel } from "../../models";
import {
  ButtonContainer,
  ContentCard,
  ExplanationContainer,
  Header,
  ImageContainer,
  NextButton,
  TextContent,
  Title,
} from "./styles";

interface ExplanationProps {
  onGoFurther: () => void;
  level: any; // Make it optional if it can be undefined
}

// Função utilitária para converter objeto {0: 137, 1: 80, ...} em base64
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

export default function Explanation({ level, onGoFurther }: ExplanationProps) {
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
    <ExplanationContainer>
      <Header>
        <Title>{level?.title}</Title>
      </Header>

      <ContentCard>
        <TextContent>
          <p>
            {((level?.text as string) || "").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </TextContent>

        {level?.image && typeof level.image === "object" && (
          <ImageContainer
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={`data:image/png;base64,${bytesObjectToBase64(level.image)}`}
              alt="Qubit state 0"
              height={300}
              width={300}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ImageContainer>
        )}

        <TextContent>
          <p>
            {((level?.second_text as string) || "")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </TextContent>

        {level?.second_img_src && typeof level.second_img_src === "object" && (
          <ImageContainer
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={`data:image/png;base64,${bytesObjectToBase64(
                level.second_img_src
              )}`}
              alt="Qubit state 0"
              height={300}
              width={300}
              style={{ display: "block", margin: "0 auto" }}
            />
          </ImageContainer>
        )}

        <TextContent>
          <p>
            {((level?.third_text as string) || "")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </TextContent>
      </ContentCard>

      <ButtonContainer>
        <NextButton onClick={(): void => onGoFurther()}>Avançar</NextButton>
      </ButtonContainer>
    </ExplanationContainer>
  );
}
