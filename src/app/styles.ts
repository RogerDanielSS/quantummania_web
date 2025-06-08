import styled from "styled-components";

export const HeroSection = styled.div`
  min-height: 100vh;
  background: url('/background-landingpage.jpg') no-repeat center center;
  background-size: cover;
`;

export const MainTitle = styled.h1`
  color: white;
  font-size: 100px;
  text-align: center;
  padding-top: 325px;
  margin: 0;
`;

export const Subtitle = styled.h2`
  color: white;
  text-align: justify;
  font-weight: 300;
  line-height: 1.75;
  letter-spacing: 0.025em;
  max-width: 32rem;
  margin-left: auto;
  margin-right: 5rem;
  margin-top: 3rem;
  padding: 0 1rem;
  font-size: 18px;
`;

export const SectionTitle = styled.h1`
  color: white;
  font-size: 40px;
  padding-top: 1.5rem;
  padding-left: 1rem;
  margin-bottom: 0;
`;

export const Divider = styled.div`
  width: 16rem;
  height: 1px;
  background-color: white;
  margin-top: 0;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
`;

export const TutorialSection = styled.div`
  width: 100%;
  background: url('/background-tutorial.png') no-repeat center center;
  background-size: cover;
  border-radius: 0.5rem;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    gap: 2.5rem;
    padding: 2.5rem;
  }
`;

export const TeamSection = styled.div`
  background: radial-gradient(circle at top right, #35546E 0%, #374F66 70%, #3E3F4C 100%);
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;