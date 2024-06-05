"use client";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Stack from "./stack";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stack" element={<Stack />} />
    </Routes>
  );
}
