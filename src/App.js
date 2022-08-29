import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About/About";
import Skills from "./Pages/Skills/Skills/Skills";
import Projects from "./Pages/Projects/Projects/Projects";
import Contact from "./Pages/Contact/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
