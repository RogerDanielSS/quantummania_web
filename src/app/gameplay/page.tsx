"use client";

import Head from "next/head";
import Navbar from "../components/navBar";
import Explanation from "../components/explanation";
import { useEffect, useState } from "react";
import { ExplanationModel, GameModel, LevelModel, QuizModel } from "../models";
import { TUTORIAL_LEVEL_1 } from "../constants/tutorial_level_1";
import Quiz from "../components/quiz";

export default function Home() {
  const [game, setGame] = useState<GameModel>();
  const [currentLevel, setCurrentLevel] = useState<LevelModel>();

  useEffect(() => {
    setGame(TUTORIAL_LEVEL_1);
  }, []);

  useEffect(() => {
    setCurrentLevel(game?.levels[0]);
  }, [game]);

  console.log(typeof currentLevel?.content);

  return (
    <div className="min-h-screen">
      <Head>
        <title>{currentLevel?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <div
          className="bg-[#f5e7e7] min-h-screen p-8"
          style={{
            paddingTop: "55px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            paddingRight: "3rem",
            paddingLeft: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "1rem",
            }}
          >
            <h1 className="text-2xl font-semibold">{currentLevel?.title}</h1>
          </div>

          {currentLevel?.content?.type === "explanation" && (
            <Explanation explanation={currentLevel.content as ExplanationModel} />
          )}
          {currentLevel?.content?.type === "quiz" && (
            <Quiz quiz={currentLevel.content as QuizModel} />
          )}

          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded font-semibold"
              style={{ borderRadius: "24px" }}
            >
              Avançar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
