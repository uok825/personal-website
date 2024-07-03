"use client";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Stack from "./stack";
import Experience from "./experience";
import Projects from "./projects";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
