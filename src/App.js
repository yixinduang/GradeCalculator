import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import React from "react";
import Page1 from "./page1";
import Page2 from "./page2";


function App() {

  


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1/>}/>

          
          <Route path="/page2" element={<Page2/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
      

  );
}

export default App;