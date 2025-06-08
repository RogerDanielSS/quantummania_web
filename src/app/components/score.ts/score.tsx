"use client";

import { GameModel, GivenResponseModel } from "../../models";

interface ScoreProps {
  onGoFurther: (givenResponse?: string) => void;
  givenResponses: GivenResponseModel[]; // Make it optional if it can be undefined
  game: GameModel;
}

export default function Score({
  givenResponses,
  game,
  onGoFurther,
}: ScoreProps) {
  return (
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
        <h1 className="text-2xl font-semibold">Score</h1>
      </div>
      <div
        className="bg-white rounded-xl shadow-md"
        style={{
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          justifyContent: "center",
          padding: "2rem 3rem",
        }}
      ></div>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded font-semibold"
          style={{ borderRadius: "24px", cursor: "pointer" }}
          onClick={(): void => onGoFurther()}
        >
          Avançar
        </button>
      </div>
    </div>
  );
}
