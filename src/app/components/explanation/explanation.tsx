"use client";

import Image from "next/image";
import { ExplanationModel, LevelModel } from "../../models";

interface ExplanationProps {
  onGoFurther: (givenResponse?: string) => void;
  level: LevelModel; // Make it optional if it can be undefined
}

export default function Explanation({ level, onGoFurther }: ExplanationProps) {
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
        <h1 className="text-2xl font-semibold">{level?.title}</h1>
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
      >
        <div
          className="text-center text-lg"
          style={{
            alignContent: "center",
          }}
        >
          <p style={{ textAlign: "left" }}>
            {((level?.content as ExplanationModel)?.text || "")
              .split("\n")
              .map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
          </p>
        </div>

        <div
          className="flex justify-center gap-6"
          style={{
            padding: "1rem",
          }}
        >
          <Image
            src={(level?.content as ExplanationModel)?.img_src}
            alt="Qubit state 0"
            height={100}
          />
        </div>
      </div>
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
