import { GameModel } from "./game";
import { GivenResponseModel } from "./given_response";

export type ScoreModel = {
  currentLevelIndex: number;
  game: GameModel;
  givenResponses?: GivenResponseModel[];
};
