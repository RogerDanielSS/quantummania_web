import { StaticImageData } from "next/image";

export type QuizModel = {
  type: "quiz";
  text?: string;
  possible_responses: string[];
  correct_response: string;
  img_src?: StaticImageData;
};
