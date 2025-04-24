import React from "react";
import { CharactersContext } from "./character.provider";

export const useCharactersContext = () => {
  const context = React.useContext(CharactersContext);

  if (!context) {
    throw new Error("useCharactersContext must be used within a CharactersProvider");
  }

  return context;
};
