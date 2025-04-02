import React, { useState } from "react";
import Header from "./windowsHeader";
import Main from "./windowsMain";
import { Routes, Route } from "react-router-dom";
import AdminPage from "../adminPage";

function App() {
  const [currentPage, setCurrentPage] = useState("about");
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={[
            <Header
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />,
            <Main currentPage={currentPage} setCurrentPage={setCurrentPage} />,
          ]}
        />
      </Routes>
      <Routes>
        <Route path="/adminPage" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
