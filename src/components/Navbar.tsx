'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import i18next from '../i18n';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false); // Initially hidden
  const [lastScrollY, setLastScrollY] = useState(0);
  const [language, setLanguage] = useState(i18next.language)

  const navLinks = [
    { id: 'about', href: '#about', label: 'Acerca de' },
    { id: 'projects', href: '#projects', label: 'Proyectos' },
    { id: 'skills', href: '#skills', label: 'Habilidades' },
    { id: 'contact', href: '#contact', label: 'Contacto' },
  ];
  const [activeSection, setActiveSection] = useState('');

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es'
    i18next.changeLanguage(newLang)
    setLanguage(newLang)
  }


  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 50) { // Threshold to hide navbar
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navLinks.map(link => document.getElementById(link.id));

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // navLinks is stable, so empty dependency array is fine for client-side effect



  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-text-main transition ease transform duration-300`;

  return (
    <nav className={`fixed w-full top-0 z-50 bg-background-main/80 backdrop-blur-md transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          {/* Logo/Name */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-3 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-3 py-2 rounded-md text-sm font-medium
                  whitespace-nowrap
                  ${activeSection === link.id
                    ? 'text-primary-accent'
                    : 'text-text-secondary hover:text-primary-accent'}
                  transition-colors duration-300
                `}
              >
                {link.label}
              </Link>
            ))}
            {/* Language Toggle Button - Desktop */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-primary-accent transition-colors duration-300"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-main hover:text-primary-accent focus:outline-none"
              aria-label="Main menu"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col h-auto w-auto justify-center items-center group">
                <div
                  className={`${genericHamburgerLine} ${isOpen
                      ? "rotate-45 translate-y-[6px] opacity-100"
                      : "opacity-100"
                    }`}
                />
                <div
                  className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                <div
                  className={`${genericHamburgerLine} ${isOpen
                      ? "-rotate-45 -translate-y-[6px] opacity-100"
                      : "opacity-100"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background-main/95 backdrop-blur-md shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={`
                  block px-3 py-2 rounded-md text-base font-medium
                  ${activeSection === link.id
                    ? 'text-primary-accent bg-border-subtle/50'
                    : 'text-text-secondary hover:text-primary-accent hover:bg-border-subtle/30'}
                  transition-colors duration-300
                `}
              >
                {link.label}
              </Link>
            ))}
            {/* Language Toggle Button - Mobile */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false); // Close menu on click
              }}
              className={`
                block w-full text-left px-3 py-2 rounded-md text-base font-medium
                text-text-secondary hover:text-primary-accent hover:bg-border-subtle/30
                transition-colors duration-300
              `}
            >
              {language === 'es' ? 'English' : 'Español'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
