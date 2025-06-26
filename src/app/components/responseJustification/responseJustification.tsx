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
import { ResponseJustificationModel } from "@/app/models/response_justification";

interface ResponseJustificationProps {
  justification?: ResponseJustificationModel;
}

export default function ResponseJustification({
  justification,
}: ResponseJustificationProps) {
  return (
    <QuizContainer>
      <QuizCard>
        <Content>
          <TextContainer>
            <Text>
              {(justification?.first_text || "").split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </Text>
          </TextContainer>

          {justification?.img_src && (
            <ImageContainer>
              <Image
                src={justification?.img_src}
                alt="Imagem de explicação"
                height={100}
              />
            </ImageContainer>
          )}

          {justification?.second_text && (
            <TextContainer>
              <Text>
                {(justification?.second_text || "")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </Text>
            </TextContainer>
          )}
        </Content>
      </QuizCard>
    </QuizContainer>
  );
}
