import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import News from "./pages/News";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


