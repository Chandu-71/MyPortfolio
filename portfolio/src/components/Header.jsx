import { useState, useEffect } from 'react';
import { IconUserFilled, IconCode, IconRocket, IconBook, IconMail } from '@tabler/icons-react';

const navItems = [
  { label: 'About', icon: <IconUserFilled size={20} />, id: 'about' },
  { label: 'Skills', icon: <IconCode size={20} stroke={2.5} />, id: 'skills' },
  { label: 'Projects', icon: <IconRocket size={20} />, id: 'projects' },
  { label: 'Education', icon: <IconBook size={20} />, id: 'education' },
  { label: 'Contact', icon: <IconMail size={20} />, id: 'contact' },
];

function Header() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach(item => {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) {
          observer.unobserve(section);
        }
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div onClick={() => scrollToSection('about')} className='fixed top-5 left-3 sm:left-5 z-50'>
        <img className='sm:h-[60px] sm:w-[60px] h-[44px] w-[44px] rounded-full cursor-pointer' src='./logo-2.png' alt='logo' />
      </div>

      <div className='fixed top-5 left-1/2 -translate-x-1/2 flex gap-1 px-3 py-2 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full z-50 ml-8'>
        {navItems.map(item => (
          <div
            key={item.label}
            className={`
              group flex items-center justify-center gap-1 sm:gap-2 px-1 sm:px-2 py-1 sm:py-2
              w-[36px] sm:w-[40px] rounded-full transition-all duration-300 ease-in-out cursor-pointer
              text-white/70 overflow-hidden
              ${activeSection === item.id ? 'w-[90px] sm:w-[120px] text-white bg-white/20' : 'hover:w-[120px] hover:text-white hover:bg-white/20'}
            `}
            onClick={() => scrollToSection(item.id)}
          >
            <div className='text-white'>{item.icon}</div>
            <span
              className={`whitespace-nowrap text-xs sm:text-sm transition-opacity duration-300
              ${activeSection === item.id ? 'inline opacity-100' : 'hidden group-hover:inline opacity-0 group-hover:opacity-100'}
            `}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Header;
