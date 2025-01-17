import { BrowserRouter,Routes, Route } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Memetrix from "./pages/Memetrix.jsx";
import BeForBrand from "./pages/BeForBrand.jsx";
import SequenceWhisper from "./pages/SequenceWhisper.jsx";
import HiddenFortunes from "./pages/HiddenFortunes.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
    <Route index element={<App />} />
      <Route path="/memetrix" element={<Memetrix />} />
      <Route path="/beforbrand" element={<BeForBrand />} />
      <Route path="/sequencewhisper" element={<SequenceWhisper />} />
      <Route path="/hiddenfortunes" element={<HiddenFortunes />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>,
)
