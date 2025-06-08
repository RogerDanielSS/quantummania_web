import { GameModel } from "../models";
import qubits from "@/app/assets/qubits.png";

export const TUTORIAL_LEVEL_1: GameModel = {
  title: "Básico",
  description: "Familiarização com conceitos de computação quântica",
  levels: [
    {
      title: "Bits quânticos",
      content: {
        type: "explanation",
        text: " Na computação clássica, os bits são 0 e 1. \n\n Na computação quântica, os bits são estados de energia |0⟩ e |1⟩, nos quais |0⟩ representa o menor estado de energia e |1⟩ representa o maior estado de energia Tipicamente, os bits quânticos são representados por matrizes, tais quais",
        img_src: qubits,
      },
    },
    {
      title: "Interferência",
      content: {
        type: "quiz",
        text: "|0⟩ — [H] — [H] — ?",
        possible_responses: ["|0⟩", "|1⟩", "-|1⟩", "1/√2|0⟩"],
        correct_response: "|0⟩",
      },
    },
    {
      title: "Interferência",
      content: {
        type: "quiz",
        text: "|0⟩ — [H] — [H] — ?",
        possible_responses: ["|0⟩", "|1⟩", "-|1⟩", "1/√2|0⟩"],
        correct_response: "|0⟩",
      },
    },
    {
      title: "Interferência",
      content: {
        type: "quiz",
        text: "|0⟩ — [H] — [H] — ?",
        possible_responses: ["|0⟩", "|1⟩", "-|1⟩", "1/√2|0⟩"],
        correct_response: "|0⟩",
      },
    },
  ],
};
