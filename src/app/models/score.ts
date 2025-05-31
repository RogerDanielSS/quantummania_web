import { GameModel } from "./game";
import { GivenResponsesModel } from "./given_responses";

export type ScoreModel = {
    currentLevelIndex: number,
    game: GameModel,
    givenResponses?: GivenResponsesModel[]
};