
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LanguagesPage from "./pages/LanguagesPage";
import TopicsPage from "./pages/TopicsPage";
import MockPage from "./pages/MockPage";

export default function App() {
  return (
    <div>
      <header style={{ padding: 16, borderBottom: "1px solid #e5e5e5" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
          <h2>Progalingo</h2>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/languages" element={<LanguagesPage />} />
          <Route path="/languages/:languageSlug" element={<TopicsPage />} />
          <Route path="/mock" element={<MockPage />} />
        </Routes>
      </main>
    </div>
  );
}
