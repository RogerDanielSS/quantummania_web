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
  index: number;
  onGoFurther?: (givenResponse: string) => void;
  onGoBack: () => void;
  level?: LevelModel;
  showRightResponse?: boolean;
  preSettedGivenResponse?: string;
}

export default function Quiz({
  index,
  level,
  onGoFurther,
  onGoBack,
  showRightResponse,
  preSettedGivenResponse,
}: QuizProps) {
  const [givenResponse, setGivenResponse] = useState<string | null>(
    preSettedGivenResponse || null
  );

  return (
    <QuizContainer $isSubPage={showRightResponse}>
      <Header>
        <Title>{level?.title}</Title>
      </Header>

      <QuizCard>
        <Content>
          <TextContainer>
            <Text>
              {((level?.content as QuizModel)?.text || "")
                .split("\n")
                .map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
            </Text>
          </TextContainer>

          {level?.content?.img_src && (
            <ImageContainer>
              <Image
                src={level?.content?.img_src}
                alt="Qubit state 0"
                height={100}
              />
            </ImageContainer>
          )}
        </Content>

        <AnswersContainer>
          {(level?.content as QuizModel)?.possible_responses?.map(
            (response, index) => {
              if (showRightResponse)
                return (
                  <ExplicitResponseDiv
                    key={index}
                    $isRightResponse={
                      (level?.content as QuizModel).correct_response ===
                      response
                    }
                    $isGivenResponse={preSettedGivenResponse === response}
                    onClick={(): void => setGivenResponse(response)}
                  >
                    {response}
                  </ExplicitResponseDiv>
                );

              return (
                <AnswerButton
                  key={index}
                  $isSelected={givenResponse === response}
                  onClick={(): void => setGivenResponse(response)}
                >
                  {response}
                </AnswerButton>
              );
            }
          )}
        </AnswersContainer>
      </QuizCard>

      <NextButtonContainer justify_end={index === 0 ? true : false}>
        {!showRightResponse && index !== 0 && (
          <NextButton
            onClick={(): void => {
              if (givenResponse !== null) {
                setGivenResponse(null);
              }
              onGoBack();
            }}
          >
            Voltar
          </NextButton>
        )}

        {!showRightResponse && onGoFurther && (
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
        )}
      </NextButtonContainer>
    </QuizContainer>
  );
}
