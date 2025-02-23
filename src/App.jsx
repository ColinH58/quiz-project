import React from "react";
import "./index.css";
import { Header, Footer, Quiz } from "../src/Components/index"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Quiz />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;