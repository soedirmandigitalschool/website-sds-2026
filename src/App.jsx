import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import Awarding from './pages/Awarding';
import CourseSyllabus from './pages/CourseSyllabus';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/awarding" element={<Awarding />} />
          <Route path="/course/:courseId" element={<CourseSyllabus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
