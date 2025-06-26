import { StaticImageData } from "next/image";
import { ResponseJustificationModel } from "./response_justification";

export type QuizModel = {
  type: "quiz";
  text?: string;
  possible_responses: string[];
  correct_response: string;
  img_src?: StaticImageData;
  response_justification?: ResponseJustificationModel;
};
