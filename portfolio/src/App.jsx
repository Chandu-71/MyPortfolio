import { useEffect, useState } from 'react';
import StarsCanvas from './components/StarCanvas';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntro(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {intro ? (
        <LandingPage />
      ) : (
        <div className='relative min-h-screen overflow-hidden text-white'>
          <div className='absolute inset-0 bg-black -z-30' />
          <StarsCanvas />

          <Header />

          <section id='about' className='min-h-screen pt-[80px] flex items-center justify-center'>
            <Hero />
          </section>
          <section id='skills' className='min-h-screen pt-[80px] flex items-center justify-center'>
            <Skills />
          </section>
          <section id='projects' className='min-h-screen pt-[80px] flex items-center justify-center'>
            <Projects />
          </section>
          <section id='education' className='min-h-screen pt-[80px] flex items-center justify-center'>
            <Education />
          </section>
          <section id='contact' className='min-h-screen pt-[80px] flex items-center justify-center'>
            <Contact />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
