import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Blogs from './components/Blogs';
import GrindPal from './components/GrindPal';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/grindpal" element={<GrindPal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
