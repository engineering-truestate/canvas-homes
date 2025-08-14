// React core imports
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '../ui/Button';
import { sections } from '@/data/optionsData';

// Reusable Icons
const IconHamburger = () => (
  <svg className="w-6 h-6 text-global-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const IconClose = () => (
  <svg className="w-6 h-6 text-global-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string>('');
  const [clickedItem, setClickedItem] = useState<string>('');

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 72;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      setClickedItem(id); // Set clicked item immediately

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setMenuOpen(false);
      // Clear clicked item after scroll animation completes
      setTimeout(() => setClickedItem(''), 800);
    }
  };

  useEffect(() => {
    const ids = ['our-process', 'buy', 'blogs', 'sell', 'contact-form'];
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const headerOffset = 72;
    const onScroll = () => {
      const y = window.scrollY + headerOffset + 1;
      let current = '';
      for (const el of elements) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (y >= top - el.offsetHeight / 2 && y < bottom - el.offsetHeight / 2) {
          current = el.id;
        }
      }
      setActiveItem(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
  className={`sticky top-0 z-50 w-full bg-white px-4 py-3 md:px-14 lg:px-20 ${
    menuOpen ? '' : 'border-b border-[#d2bfbf]'
  }`}
>

      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2">
          <button
            className="block md:hidden p-1"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IconClose /> : <IconHamburger />}
          </button>

          <div
            className="flex gap-1.5 items-center cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveItem('');
              setClickedItem('');
              setMenuOpen(false);
            }}
          >
            <Image
              src="/images/img_vector_deep_purple_600.svg"
              alt="Canvas Homes Logo"
              width={24}
              height={32}
              className="w-6 h-8"
            />
            <Image
              src="/images/img_frame_3265.svg"
              alt="Canvas Homes Text"
              width={70}
              height={28}
              className="w-[70px] h-7"
            />
          </div>
        </div>

        {/* Nav */}
        <nav
          className={`${menuOpen ? 'block' : 'hidden'} md:block absolute left-0 top-full w-full bg-white shadow-lg md:relative md:w-auto md:bg-transparent md:shadow-none`}
        >
          <div className="flex flex-col md:flex-row gap-4 md:gap-7 justify-center items-center p-4 md:p-0">
            {sections.map((item) => (
              <span
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className={`relative text-[18px] font-medium leading-[27px] text-center font-['Poppins'] cursor-pointer transition-colors duration-300 group ${
                  activeItem === item.id || clickedItem === item.id
                    ? 'text-global-6'
                    : 'text-global-8 hover:text-global-6'
                }`}
              >
                {item.label}

                {/* Active underline - visible when active or clicked */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-global-6 transform origin-center transition-transform duration-300 ${
                    activeItem === item.id || clickedItem === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />

                {/* Hover underline - darker purple, only visible on hover when not active or clicked */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-700 transform origin-center scale-x-0 transition-transform duration-300 ${
                    activeItem === item.id || clickedItem === item.id
                      ? 'group-hover:scale-x-0'
                      : 'group-hover:scale-x-100'
                  }`}
                />
              </span>
            ))}
          </div>
        </nav>

        {/* Right: WhatsApp + Contact */}
        <div className="flex gap-3 items-center">
          <Image
            src="/images/img_whatsapp_128.svg"
            alt="WhatsApp"
            width={28}
            height={28}
            className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform hidden md:block"
          />
          <Button
            variant="primary"
            className="bg-button-1 hover:bg-global-6 text-global-20 font-semibold rounded-md px-[18px] md:px-[30px] py-2.5 text-center leading-snug max-[320px]:whitespace-normal"
            onClick={() => handleScroll('contact-form')}
          >
            Contact Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
