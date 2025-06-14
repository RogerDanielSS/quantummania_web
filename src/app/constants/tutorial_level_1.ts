import { GameModel } from "../models";
import qubits from "@/app/assets/qubits.png";
import usePauliZ from "@/app/assets/use-pauli-z.png";
import useHadamard from "@/app/assets/use-hadamard.png";

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
        text: "Qual o estado resultante de utilizar duas portas Hadamard sobre o estado |0⟩?",
        img_src: useHadamard,
        possible_responses: ["|0⟩", "|1⟩", "-|1⟩", "1/√2|0⟩"],
        correct_response: "|0⟩",
      },
    },
    {
      title: "Utilização da porta Pauli Z",
      content: {
        type: "quiz",
        img_src: usePauliZ,
        text: 'Como a porta Z modifica o estado |1⟩?',
        possible_responses: ["Mantem o mesmo estado", "Transforma em |0⟩", "Transforma em -|1⟩", "Cria uma superposição"],
        correct_response: "Transforma em -|1⟩",
      },
    },
  ],
};
