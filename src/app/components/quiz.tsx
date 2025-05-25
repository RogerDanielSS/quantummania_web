import { LevelModel, QuizModel } from "../models";

interface QuizProps {
  quiz?: QuizModel; // Make it optional if it can be undefined
}

export default function Quiz({ quiz }: QuizProps) {
  return (
    <div className="bg-white rounded-xl shadow-md" style={{ height: "60vh" }}>
      <div
        className="text-center text-lg"
        style={{ height: "80%", alignContent: "center" }}
      >
        <p style={{}}>
          {(quiz?.text || "").split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>

      <div
        className="flex justify-center gap-6"
        style={{ height: "20%", padding: "1rem" }}
      >
        {quiz?.possible_responses?.map((response, index) => (
          <div
            key={index}
            className="bg-gray-300 px-6 py-3 rounded cursor-pointer hover:bg-gray-400"
          >
            {response}
          </div>
        ))}
      </div>
    </div>
  );
}
