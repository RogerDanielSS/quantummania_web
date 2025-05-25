import { ExplanationModel } from "./explanation";
import { QuizModel } from "./quiz";

export type LevelModel = {
  title: string;
  content: ExplanationModel | QuizModel;
};
