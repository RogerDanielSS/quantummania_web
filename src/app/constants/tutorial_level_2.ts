import { GameModel } from "../models";
import qubits from "@/app/assets/qubits.png";
import qugateApplication from "@/app/assets/qugate_application .png";
import usePauliZ from "@/app/assets/use-pauli-z.png";
import useHadamard from "@/app/assets/use-hadamard.png";

export const TUTORIAL_LEVEL_1: GameModel = {
  title: "Básico",
  description: "Familiarização com conceitos de computação quântica",
  levels: [
    {
      title: "Interferência",
      content: {
        type: "quiz",
        text: "Qual o estado resultante de utilizar duas portas Hadamard sobre o estado |0⟩?",
        img_src: useHadamard,
        possible_responses: ["|0⟩", "|1⟩", "-|1⟩", "1/√2|0⟩"],
        correct_response: "|0⟩",
      },
    },
  ],
};
