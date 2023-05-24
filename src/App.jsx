import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'
import LandingPage from './pages/landing.jsx'
import { Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
    <Route path="/" element={<LandingPage/>}/>
  </Routes>
  )
}

export default App
