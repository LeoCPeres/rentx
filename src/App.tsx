import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CarList } from "./pages/Home/CarList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inicio" element={<CarList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
