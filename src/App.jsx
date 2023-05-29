import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import LandingPage from "./pages/landing.jsx";
import AppLanding from "./pages/app_landing";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppLanding />} />
    </Routes>
  );
}

export default App;
