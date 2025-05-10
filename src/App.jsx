// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuoteForm from "./pages/QuoteForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quote" element={<QuoteForm />} />
    </Routes>
  );
}
