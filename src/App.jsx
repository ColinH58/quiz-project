import React from "react";
import "./index.css";
import { Header, Footer, Blog, Resume, Home } from "../src/Components/index"
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;