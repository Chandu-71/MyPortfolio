import { useEffect, useState } from 'react';

const MATRIX_CHARS = '#$%&@!*?=+{}[]<>|/\\;:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

function getRandomChar() {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

function Hero() {
  const fullTitle = "Hi, I'm Chandu";
  const fullDesc =
    'Exploring the digital universe as a full-stack developer who solves problems, builds ambitious web apps, and turns ideas into pixel-perfect experiences';
  const [titleAnim, setTitleAnim] = useState([]);
  const [descAnim, setDescAnim] = useState([]);
  const [showReal, setShowReal] = useState(false);

  useEffect(() => {
    let interval;
    let elapsed = 0;
    const totalDuration = 1600;
    const frame = 40;
    const titleArr = fullTitle.split('');
    const descArr = fullDesc.split('');
    const titleLen = titleArr.length;
    const descLen = descArr.length;

    function animate() {
      elapsed += frame;
      let allDone = true;
      const newTitle = titleArr.map((c, i) => {
        if (c === ' ') return ' ';
        const revealAt = (i / (titleLen - 1)) * totalDuration;
        if (elapsed >= revealAt) {
          return c;
        } else {
          allDone = false;
          return getRandomChar();
        }
      });
      const newDesc = descArr.map((c, i) => {
        if (c === ' ') return ' ';
        const revealAt = (i / (descLen - 1)) * totalDuration;
        if (elapsed >= revealAt) {
          return c;
        } else {
          allDone = false;
          return getRandomChar();
        }
      });
      setTitleAnim(newTitle);
      setDescAnim(newDesc);
      if (!allDone) {
        interval = setTimeout(animate, frame);
      } else {
        setShowReal(true);
      }
    }
    animate();
    return () => clearTimeout(interval);
  }, []);

  return (
    <section className='relative min-h-screen -top-10 w-full text-white flex items-center justify-center overflow-hidden'>
      <div className='absolute max-sm:top-45 sm:top-6 w-110 h-110 sm:w-150 sm:h-150 rounded-full overflow-hidden opacity-80 pointer-events-none'>
        <video autoPlay loop muted playsInline className='w-full h-full object-cover'>
          <source src='/digital_planet.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='text-center z-10 px-4'>
        <h1 className='space-title tracking-[0.05em] text-white text-4xl md:text-8xl font-bold mb-4'>
          {showReal ? (
            <>
              {fullTitle.split('').map((char, i) =>
                char === 'C' && fullTitle.includes('Chandu') && i === fullTitle.indexOf('C') ? (
                  <span key={i} className='space-accent'>
                    {char}
                  </span>
                ) : (
                  <span key={i}>{char}</span>
                )
              )}
            </>
          ) : (
            titleAnim.map((char, i) => <span key={i}>{char}</span>)
          )}
        </h1>
        <p className='space-desc sm:tracking-[0.01em] text-gray-300 text-lg md:text-xl sm:max-w-1/2 mx-auto mb-8'>
          {showReal ? fullDesc : descAnim.map((char, i) => <span key={i}>{char}</span>)}
        </p>
        <a
          href='/Chandu-Resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className="ui-btn mx-auto rounded-xl border-2 border-[#2A2B3A] font-semibold font-['Menlo','Roboto_Mono',monospace] px-5 py-3 text-white bg-black transition duration-300 hover:shadow-[0_0_10px_0_rgba(0,68,255,0.7)] hover:border-blue-700 hover:text-blue-500"
        >
          <span className='tracking-[0.1rem]'>Resume</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
