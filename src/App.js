import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import React from "react";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page22 from "./pages2/page2";
import Page3 from "./pages2/page3";
import FinalTable from "./pages/FinalTable";
import PartialGradeFinalTable from "./pages2/partialGradeFinalTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />

          <Route path="/page2" element={<Page2 />} />
          <Route path="/FinalTable" element={<FinalTable />} />
          <Route path="/page22" element={<Page22 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route
            path="/PartialGradeFinalTable"
            element={<PartialGradeFinalTable />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
