"use client";

import Image from "next/image";
import { ExplanationModel, LevelModel } from "../../models";
import { ButtonContainer, ContentCard, ExplanationContainer, Header, ImageContainer, NextButton, TextContent, Title } from "./styles";

interface ExplanationProps {
  onGoFurther: () => void;
  level: LevelModel; // Make it optional if it can be undefined
}

export default function Explanation({ level, onGoFurther }: ExplanationProps) {
  return (
    <ExplanationContainer>
      <Header>
        <Title>{level?.title}</Title>
      </Header>

      <ContentCard>
        <TextContent>
          <p>
            {((level?.content as ExplanationModel)?.text || "")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </TextContent>

        <ImageContainer>
          <Image
            src={(level?.content as ExplanationModel)?.img_src || ""}
            alt="Qubit state 0"
            height={100}
          />
        </ImageContainer>
      </ContentCard>

      <ButtonContainer>
        <NextButton onClick={(): void => onGoFurther()}>Avançar</NextButton>
      </ButtonContainer>
    </ExplanationContainer>
  );
}
