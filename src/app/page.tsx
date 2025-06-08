"use client";

import Link from "next/link";
import Card from "./components/cardTutorial";
import MembroEquipe from "./components/membroEquipe";
import {
  HeroSection,
  MainTitle,
  Subtitle,
  SectionTitle,
  Divider,
  TutorialSection,
  CardsContainer,
  TeamSection,
} from "./styles";
import { TUTORIAL_LEVEL_1 } from "./constants/tutorial_level_1";

export default function Home() {
  return (
    <>
      <HeroSection>
        <MainTitle>Quantummania</MainTitle>
        <Subtitle>
          Um site para aprendizagem de circuitos quânticos feito de estudantes
          para estudantes
        </Subtitle>
      </HeroSection>

      <div>
        <div>
          <SectionTitle>Tutorial</SectionTitle>
          <Divider />
        </div>
        <TutorialSection>
          <CardsContainer>
            <Link href="/gameplay">
              <Card
                numeroCard="01"
                nivelCard="Básico"
                descricaoCard={TUTORIAL_LEVEL_1.description}
              />
            </Link>
            <Link href="/gameplay">
              <Card
                numeroCard="02"
                nivelCard="Básico"
                descricaoCard={TUTORIAL_LEVEL_1.description}
              />
            </Link>
            <Link href="/gameplay">
              <Card
                numeroCard="03"
                nivelCard="Básico"
                descricaoCard={TUTORIAL_LEVEL_1.description}
              />
            </Link>
          </CardsContainer>
        </TutorialSection>
      </div>

      <div>
        <SectionTitle>Quem somos nós</SectionTitle>
        <Divider style={{ width: "32rem" }} />
      </div>
      <TeamSection>
        <MembroEquipe
          nomeMembro="Estêvão"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Guilherme"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="John"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Jonathan"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Leticia"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Roger"
          githubUrl="https://github.com/RogerDanielSS"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Thiago"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
        <MembroEquipe
          nomeMembro="Vinícius"
          githubUrl="https://github.com/Txtravos"
          linkedinUrl="https://www.linkedin.com/in/estevaoviana/"
        />
      </TeamSection>
    </>
  );
}
