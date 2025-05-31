import { useState } from "react";
import { LevelModel, QuizModel } from "../../models";
import { AnswerButton, AnswersContainer, Content, Header, NextButton, NextButtonContainer, QuizCard, QuizContainer, Title } from "./styles";

interface QuizProps {
  onGoFurther: (givenResponse: string) => void;
  level?: LevelModel; // Make it optional if it can be undefined
}

export default function Quiz({ level, onGoFurther }: QuizProps) {
  const [givenResponse, setGivenResponse] = useState<string | null>(null);

 return (
    <QuizContainer>
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
            (response, index) => (
              <AnswerButton
                key={index}
                $isSelected={givenResponse === response}
                onClick={(): void => setGivenResponse(response)}
              >
                {response}
              </AnswerButton>
            )
          )}
        </AnswersContainer>
      </QuizCard>

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
    </QuizContainer>
  );
}
