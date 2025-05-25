"use client";

import Image from "next/image";
import { ExplanationModel, LevelModel } from "../models";

interface ExplanationProps {
  explanation: ExplanationModel; // Make it optional if it can be undefined
}

export default function Explanation({ explanation }: ExplanationProps) {
  return (
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
          {(explanation?.text || "").split("\n").map((line, i) => (
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
          src={explanation?.img_src}
          alt="Qubit state 0"
          height={100}
        />
      </div>
    </div>
  );
}
