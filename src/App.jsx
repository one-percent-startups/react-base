import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";
import LandingPage from "./pages/landing.jsx";
import Copy_LandingPage from "./pages/secondlanding.jsx";
import AppLanding from "./pages/app_landing";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/app" element={<LandingPage />} />
      <Route path="/" element={<AppLanding />} />
      <Route path="/copy" element={<Copy_LandingPage />} />
    </Routes>
  );
}

export default App;
