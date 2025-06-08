import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

interface QuizContainerProps {
  $isSubPage?: boolean;
}
// Styled components
export const QuizContainer = styled.div<QuizContainerProps>`
  background-color: #f5e7e7;
  min-height: ${(props) => (props?.$isSubPage ? "auto" : "100vh")};
  padding: ${(props) => (props?.$isSubPage ? "0 3rem" : "55px 3rem 3rem")};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${fadeIn} 0.3s ease-in;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const QuizCard = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  height: 60vh;
`;

export const Content = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 2rem;
`;

export const AnswersContainer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
`;

interface AnswerButtonProps {
  $isSelected: boolean;
}

export const AnswerButton = styled.button<AnswerButtonProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isSelected ? "#1e3a8a;" : "rgb(209, 213, 219)"};
  transition: background-color 0.2s ease;
  border: none;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) =>
      props.$isSelected ? "#1e3a8a;" : "rgb(156, 163, 175)"};
  }
`;

interface ExplicitResponseDivProps {
  $isRightResponse?: boolean;
  $isGivenResponse?: boolean;
}

export const ExplicitResponseDiv = styled.div<ExplicitResponseDivProps>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  background-color: ${(props) =>
    props.$isRightResponse
      ? "rgb(22 163 74)"
      : props.$isGivenResponse
      ? "red"
      : "rgb(209, 213, 219)"};
  transition: background-color 0.2s ease;
  border: none;
  font-size: 1rem;
`;

export const NextButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NextButton = styled.button`
  background-color: rgb(22 163 74);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 24px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.9;
  }
`;
