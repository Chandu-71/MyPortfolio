import { useEffect, useRef } from 'react';

const GlowingText = ({ text, delay = 0.1 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    container.innerHTML = '';

    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.classList.add('glow-letter');
      span.style.animationDelay = `${i * delay}s`;
      container.appendChild(span);
    });
  }, [text, delay]);

  return <h1 ref={ref} className='text-white text-2xl sm:text-3xl uppercase tracking-widest font-mono text-center' />;
};

const LandingPage = () => {
  return (
    <div className='fixed inset-0 z-50 bg-black flex items-center justify-center'>
      <GlowingText text='CHANDUˊs UNIVERSE' />
    </div>
  );
};

export default LandingPage;
