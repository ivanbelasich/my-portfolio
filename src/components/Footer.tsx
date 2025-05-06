'use client';
import React, { useState, useEffect } from 'react';
import i18next from '../i18n'; // Adjust path if i18n.ts is elsewhere

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [language, setLanguage] = useState(i18next.language); // Estado para el idioma

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setLanguage(lng);
    };
    i18next.on('languageChanged', handleLanguageChange);
    // Limpieza al desmontar el componente
    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []); // El array vacío asegura que esto se ejecute solo al montar y desmontar

  return (
    <footer className="bg-background-main border-t border-border-subtle py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-text-secondary">
          {i18next.t('footer.copyright', { year: currentYear, name: "Ivan Belasich", lng: language })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
