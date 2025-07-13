import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import Contact from '../Pages/Contact';


export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
