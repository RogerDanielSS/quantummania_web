"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { GameModel, GivenResponseModel } from "../models";
import { TUTORIAL_LEVEL_1 } from "../constants/tutorial_level_1";
import Quiz from "../components/quiz/quiz";
import Explanation from "../components/explanation/explanation";
import Navbar from "../components/navBar/navBar";
import Score from "../components/score.ts/score";

export default function Home() {
  const [game, setGame] = useState<GameModel>();
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [givenResponses, setGivenResponses] = useState<GivenResponseModel[]>(
    []
  );

  const onGoFurther = (givenResponse?: string): void => {
    if (givenResponse)
      setGivenResponses(
        givenResponses.concat([
          {
            levelIndex: currentLevelIndex,
            reponse: givenResponse,
          },
        ])
      );
    setCurrentLevelIndex(currentLevelIndex + 1);
  };

  const onGoBack = (): void => {
    if (currentLevelIndex > 0) setCurrentLevelIndex(currentLevelIndex - 1);
  };

  useEffect(() => {
    setGame(TUTORIAL_LEVEL_1);
  }, []);

  useEffect(() => {
    if (game) {
      const EMPTY_SCORE = {
        currentLevelIndex: 0,
        game: game,
        givenResponses: [],
      };
    }
  }, [game]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>{game?.levels[currentLevelIndex]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        {game?.levels[currentLevelIndex]?.content?.type === "explanation" && (
          <Explanation
            level={game?.levels[currentLevelIndex]}
            onGoFurther={onGoFurther}
          />
        )}
        {game?.levels[currentLevelIndex]?.content?.type === "quiz" && (
          <Quiz
            level={game?.levels[currentLevelIndex]}
            onGoFurther={onGoFurther}
          />
        )}
        {game && currentLevelIndex >= game.levels.length && (
          <Score game={game} givenResponses={givenResponses} />
        )}
      </main>
    </div>
  );
}
