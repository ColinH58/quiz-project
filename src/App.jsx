import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { Main } from "./Components"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;