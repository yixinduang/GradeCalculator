import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FinalGradeProvider } from "./ElementFunction/Contexts/finalContext";
import { SelectionProvider } from "./ElementFunction/Contexts/selectionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FinalGradeProvider>
    <SelectionProvider>
      <App />
    </SelectionProvider>
  </FinalGradeProvider>
);
