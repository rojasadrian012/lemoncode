import React from "react";
import { MembersContext } from "./members.provider";

export const useMembersContext = () => {
  const context = React.useContext(MembersContext);

  if (!context) {
    throw new Error("useMembersContext must be used within a MembersProvider");
  }

  return context;
};
