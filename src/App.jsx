import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
