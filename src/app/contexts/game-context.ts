import { createContext } from "react";
import { GameModel } from "../models";

type Props = {
  setCurrentGame?: (game: GameModel) => void;
  currentGame?: GameModel;
};

export default createContext<Props>({
  setCurrentGame: () => {
    throw new Error("setCurrentGame function must be overridden by Provider");
  },
});
