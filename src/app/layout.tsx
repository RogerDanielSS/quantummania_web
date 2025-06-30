"use client";

import { useState } from "react";
import { GameContext } from "./contexts";
import "./globals.css";
import { GameModel } from "./models";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [game, setGame] = useState<GameModel>();

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <GameContext.Provider
          value={{
            setCurrentGame: setGame,
            currentGame: game,
          }}
        >
          {children}
        </GameContext.Provider>
      </body>
    </html>
  );
}
