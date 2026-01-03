import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Features from "./pages/Features";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HashRouter>
      <div className="bg-darkbg text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/features" element={<Features />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
