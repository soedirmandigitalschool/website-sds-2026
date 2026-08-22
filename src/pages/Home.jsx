import Hero from '../components/Hero';
import MediaPartner from '../components/MediaPartner';
import About from '../components/About';
import BenefitProgram from '../components/BenefitProgram';
import Timeline from '../components/Timeline';
import LearningPath from '../components/LearningPath';
import FAQ from '../components/FAQ';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Use a slight delay to ensure components are mounted
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <MediaPartner />
      <About />
      <BenefitProgram />
      <Timeline />
      <LearningPath />
      <FAQ />
    </main>
  );
}
