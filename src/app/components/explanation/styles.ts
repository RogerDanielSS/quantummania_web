import styled, { keyframes } from "styled-components";

// Styled components
export const ExplanationContainer = styled.div`
  background-color: #f5e7e7;
  min-height: 100vh;
  padding: 55px 3rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const ContentCard = styled.div`
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
  height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* justify-content: center; */
  padding: 2rem 3rem;
`;

export const TextContent = styled.div`
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.75rem;

  p {
    text-align: left;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
`;

export const ButtonContainer = styled.div`
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