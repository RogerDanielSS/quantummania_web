"use client";

import Image from "next/image";
import { ExplanationModel, LevelModel } from "../../models";
import {
  BackButton,
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
  index: number;
  onGoFurther: () => void;
  onGoBack: () => void;
  level: LevelModel; // Make it optional if it can be undefined
}

export default function Explanation({
  index,
  level,
  onGoFurther,
  onGoBack,
}: ExplanationProps) {
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

        {level?.content?.img_src && (
          <ImageContainer>
            <Image
              src={level?.content?.img_src}
              alt="Qubit state 0"
              height={100}
            />
          </ImageContainer>
        )}

        <TextContent>
          <p>
            {((level?.content as ExplanationModel)?.second_text || "")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </TextContent>

        {(level?.content as ExplanationModel)?.second_img_src && (
          <ImageContainer>
            <Image
              src={(level.content as ExplanationModel).second_img_src!}
              alt="Qubit state 0"
              height={100}
            />
          </ImageContainer>
        )}

        <TextContent>
          <p>
            {((level?.content as ExplanationModel)?.third_text || "")
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

      <ButtonContainer justify_end={index === 0 ? true : false}>
        {index !== 0 && (
          <BackButton onClick={(): void => onGoBack()}>Voltar</BackButton>
        )}
        <NextButton onClick={(): void => onGoFurther()}>Avançar</NextButton>
      </ButtonContainer>
    </ExplanationContainer>
  );
}
