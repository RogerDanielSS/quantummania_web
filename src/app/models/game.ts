import { LevelModel } from "./level";

export type GameModel = {
  title: string;
  description: string;
  levels: LevelModel[];
};
