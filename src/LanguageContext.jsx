import { createContext, useState, useEffect } from 'react';
import es from '../public/locales/es/es.json';
import en from '../public/locales/en/en.json';
import fr from '../public/locales/fr/fr.json';
import al from '../public/locales/al/al.json';

export const LanguageContext = createContext();

const supportedLanguages = {
    es,
    en,
    fr,
    al
};

const getDefaultLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && supportedLanguages[savedLanguage]) {
        return savedLanguage;
    }

    const browserLanguage = navigator.language.slice(0, 2);
    if (supportedLanguages[browserLanguage]) {
        return browserLanguage;
    }

    return 'en';
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getDefaultLanguage);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const changeLanguage = (selectedLanguage) => {
        if (supportedLanguages[selectedLanguage]) {
            setLanguage(selectedLanguage);
        } else {
            setLanguage('en');
        }
    };

    const currentLanguageData = supportedLanguages[language];

    return (
        <LanguageContext.Provider value={{ language: currentLanguageData, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};