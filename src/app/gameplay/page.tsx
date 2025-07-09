"use client";

import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { GameModel, GivenResponseModel } from "../models";
import { TUTORIAL_LEVEL_1 } from "../constants/tutorial_level_1";
import Quiz from "../components/quiz/quiz";
import Explanation from "../components/explanation/explanation";
import Navbar from "../components/navBar/navBar";
import Score from "../components/score.ts/score";
import { GameContext } from "../contexts";

export default function Home() {
  const { currentGame } = useContext(GameContext);
  console.log(currentGame);

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
    if (currentGame) {
      const EMPTY_SCORE = {
        currentLevelIndex: 0,
        game: currentGame,
        givenResponses: [],
      };
    }
  }, [currentGame]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>{currentGame?.levels[currentLevelIndex]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        {currentGame?.levels[currentLevelIndex]?.content?.type ===
          "explanation" && (
          <Explanation
            index={currentLevelIndex}
            level={currentGame?.levels[currentLevelIndex]}
            onGoFurther={onGoFurther}
            onGoBack={onGoBack}
          />
        )}
        {currentGame?.levels[currentLevelIndex]?.content?.type === "quiz" && (
          <Quiz
            index={currentLevelIndex}
            level={currentGame?.levels[currentLevelIndex]}
            onGoFurther={onGoFurther}
            onGoBack={onGoBack}
          />
        )}
        {currentGame && currentLevelIndex >= currentGame.levels.length && (
          <Score game={currentGame} givenResponses={givenResponses} />
        )}
      </main>
    </div>
  );
}
