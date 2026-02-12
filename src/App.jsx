import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SeatSelection from "./pages/SeatSelection";
import Contact from "./pages/Contact";
import About from "./pages/About"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  );
}

export default App;
``