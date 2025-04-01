import React from "react";
import MobileMain from "./mobileMain";
import MobileHeader from "./mobileHeader";
import { Routes, Route } from "react-router-dom";

function MobileApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={[<MobileHeader />, <MobileMain />]} />
      </Routes>
    </div>
  );
}

export default MobileApp;
