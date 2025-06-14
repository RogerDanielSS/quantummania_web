import { GameModel } from "../models";
import qubits from "@/app/assets/qubits.png";
import qugateApplication from "@/app/assets/qugate_application .png";
import pauliX from "@/app/assets/pauli-x.png";
import pauliXTo0 from "@/app/assets/pauli-x-to-0.png";
import pauliZ from "@/app/assets/pauli-z.png";
import pauliZTo1 from "@/app/assets/pauli-z-to-1.png";
import usePauliZ from "@/app/assets/use-pauli-z.png";
import usePaulix from "@/app/assets/pauli-x-use.png";
import paulixOverPaulizOver1 from "@/app/assets/x-over-z-over-1.png";

export const TUTORIAL_LEVEL_1: GameModel = {
  title: "Básico",
  description: "Familiarização com conceitos de computação quântica",
  levels: [
    {
      title: "Bits quânticos",
      content: {
        type: "explanation",
        text: " Na computação clássica, os bits são 0 e 1. \n\n Na computação quântica, os bits são estados de energia |0⟩ e |1⟩, nos quais |0⟩ representa o menor estado de energia e |1⟩ representa o maior estado de energia Tipicamente, os bits quânticos são representados por matrizes, tais quais\n\n\n",
        img_src: qubits,
      },
    },
    {
      title: "Portas quânticas",
      content: {
        type: "explanation",
        text: " Assim como os qubits, portas lógicas quânticas também são representadas por matrizes. Existem portas que se aplicam a um qubit e existem portas que se aplicam a multiplos qubits.\n\n A aplicação de uma porta lógica quântica se dá pela multiplicação de matrizes, tal qual",
        img_src: qugateApplication,
        second_text: " Vamos conhecer algumas portas de um qubit...",
      },
    },
    {
      title: "Porta Pauli X",
      content: {
        type: "explanation",
        text: " É uma das portas Pauli, muito utilizadas na computação quãntica. Sua função é bem semelhante à porta NOT na compução clássica, pois ela transforma |0⟩ em |1⟩ e vice versa. \nA porta pauli X é representada pela matriz ",
        img_src: pauliX,
        second_text: " Veja como a porta Pauli X é aplicada ao qubit |0⟩",
        second_img_src: pauliXTo0,
      },
    },
    {
      title: "Utilização da porta Pauli X",
      content: {
        type: "quiz",
        img_src: usePaulix,
        text: "Qual o resultado de aplicar Pauli X sobre |0⟩?",
        possible_responses: [
          "|0⟩",
          "|1⟩",
          "-|1⟩",
          "Cria uma superposição",
        ],
        correct_response: "|1⟩",
      },
    },
    {
      title: "Porta Pauli Z",
      content: {
        type: "explanation",
        text: " Também é uma das portas Pauli. Sua função se difere das portas Pauli X e Pauli Y, pois ela deixa |0⟩ inauterado, mas transforma |1⟩ em -|1⟩, ou seja, inverte a fase de |1⟩. \nA porta pauli Z é representada pela matriz ",
        img_src: pauliZ,
        second_text: " Veja como a porta Pauli Z é aplicada ao qubit |1⟩",
        second_img_src: pauliZTo1,
      },
    },
    {
      title: "Utilização da porta Pauli Z",
      content: {
        type: "quiz",
        img_src: usePauliZ,
        text: "Como a porta Z modifica o estado |1⟩?",
        possible_responses: [
          "Mantem o mesmo estado",
          "Transforma em |0⟩",
          "Transforma em -|1⟩",
          "Cria uma superposição",
        ],
        correct_response: "Transforma em -|1⟩",
      },
    },
    {
      title: "Utilização das portas Pauli X e Pauli Z",
      content: {
        type: "quiz",
        img_src: paulixOverPaulizOver1,
        text: "Qual o resultado de aplicar Pauli X e Pauli Z sobre |1⟩?",
        possible_responses: [
          "-|0⟩",
          "|1⟩",
          "-|1⟩",
          "|0⟩",
        ],
        correct_response: "-|0⟩",
      },
    },
  ],
};
