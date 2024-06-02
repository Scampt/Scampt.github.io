import { useState, useEffect } from 'react';
import '../css/ColorMode.css';
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import Toggle from "react-toggle";

const ColorMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('colorMode');
        if (savedMode) {
            return savedMode === 'dark';
        }
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        return darkModeMediaQuery.matches;
    });

    useEffect(() => {
        const savedMode = localStorage.getItem('colorMode');
        if (savedMode) {
            setIsDarkMode(savedMode === 'dark');
        } else {
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setIsDarkMode(darkModeMediaQuery.matches);
        }
    }, []);

    const toggleMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('colorMode', newMode ? 'dark' : 'light');
            return newMode;
        });
    };

    useEffect(() => {
        const handleColorSchemeChange = (e) => {
            setIsDarkMode(e.matches);
            localStorage.setItem('colorMode', e.matches ? 'dark' : 'light');
        };

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);

        return () => {
            darkModeMediaQuery.removeEventListener('change', handleColorSchemeChange);
        };
    }, []);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
    }, [isDarkMode]);

    return (
        <div className="color-mode-container">
            <Toggle
                checked={isDarkMode}
                className="react-toggle"
                icons={{
                    unchecked: <FaMoon />,
                    checked: <GoSun />
                }}
                onChange={toggleMode}
            />
        </div>
    );
};

export default ColorMode;