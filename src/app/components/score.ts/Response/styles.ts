import styled, { keyframes } from "styled-components";

interface ContainerProps {
  $correctResponse?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background-color: ${(props): string =>
    props?.$correctResponse ? "rgb(22 163 74)" : "red"};
  width: 100%;
  cursor: pointer;
  border-radius: 16px;
  height: 32px;
  display: flex;
  gap: 1rem;
`;

export const CenteredDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
