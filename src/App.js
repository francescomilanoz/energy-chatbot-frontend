import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Bot from "./pages/Bot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="bot" element={<Bot />} />
      </Routes>
    </BrowserRouter>
  );
}
