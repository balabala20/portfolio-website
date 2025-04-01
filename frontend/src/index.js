import React from "react";
import ReactDom from "react-dom/client";
import WindowsApp from "./windowView/windowsApp";
import MobileApp from "./mobileView/mobileApp";
import "./mobileView/mobileStyle.css";
import "./windowView/style.css";
import "./bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const isMobile = window.innerWidth <= 1000;
let root = ReactDom.createRoot(document.getElementById("root"));


root.render(
  
  <React.StrictMode>
    {isMobile
      ? 
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MobileApp />} />
            </Routes>
          </BrowserRouter>
      : 
          <BrowserRouter>
              <WindowsApp/>
          </BrowserRouter>
        }
  </React.StrictMode>
);

