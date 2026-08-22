import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MediaPartner from './components/MediaPartner';
import About from './components/About';
import BenefitProgram from './components/BenefitProgram';
import Timeline from './components/Timeline';
import LearningPath from './components/LearningPath';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <MediaPartner />
        <About />
        <BenefitProgram />
        <Timeline />
        <LearningPath />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
