import React, { useContext, useState } from "react";

const selectionContext = React.createContext({});

export const useSelectionContext = () => {
  return useContext(selectionContext);
};

export const SelectionProvider = ({ children }) => {
  const [selected, setSlection] = React.useState("Total");

  return (
    <selectionContext.Provider value={{ selected, setSlection }}>
      {children}
    </selectionContext.Provider>
  );
};
