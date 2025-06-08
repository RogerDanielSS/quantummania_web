import { useState } from "react";
import { LevelModel, QuizModel } from "../../models";
import {
  AnswerButton,
  AnswersContainer,
  Content,
  ExplicitResponseDiv,
  Header,
  NextButton,
  NextButtonContainer,
  QuizCard,
  QuizContainer,
  Title,
} from "./styles";

interface QuizProps {
  onGoFurther?: (givenResponse: string) => void;
  level?: LevelModel;
  showRightResponse?: boolean;
  preSettedGivenResponse?: string;
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

  return (
    <QuizContainer $isSubPage={showRightResponse}>
      <Header>
        <Title>{level?.title}</Title>
      </Header>

      <QuizCard>
        <Content>
          <p>
            {((level?.content as QuizModel)?.text || "")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
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
