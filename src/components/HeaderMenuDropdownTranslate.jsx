import { useState, useEffect, useContext } from 'react';
import { MdOutlineTranslate } from "react-icons/md";
import { LanguageContext } from '../LanguageContext';
import '../css/HeaderMenuDropdownTranslate.css';

import flagEs from '../assets/flags/es.svg';
import flagUs from '../assets/flags/us.svg';
import flagFr from '../assets/flags/fr.svg';
import flagDe from '../assets/flags/de.svg';

const HeaderMenuDropdownTranslate = ({ setIsLoading }) => {
    const { changeLanguage } = useContext(LanguageContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const preventDefaultHandler = (event) => {
        event.preventDefault();
    };

    const handleLanguageChange = (language) => {
        console.log('Changing language to:', language);
        setIsLoading(true);
        setTimeout(() => {
            changeLanguage(language);
            setIsLoading(false);
            closeDropdown();
        }, 1000);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest('.header__nav') === null) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='header__nav'>
            <a className='header__nav__link' onClick={toggleDropdown}>
                <MdOutlineTranslate size={30} />
            </a>
            <ul className={`header__nav__dropdown__menu ${isDropdownOpen ? 'open' : ''}`}>
                <li className='header__nav__item'>
                    <a className='header__nav__link language-link' onClick={(e) => { preventDefaultHandler(e); handleLanguageChange('es'); }} href="">
                        <img className='flag-img' src={flagEs} alt="Flag of Spain" />
                        Spanish
                    </a>
                </li>
                <li className='header__nav__item'>
                    <a className='header__nav__link language-link' onClick={(e) => { preventDefaultHandler(e); handleLanguageChange('en'); }} href="">
                        <img className='flag-img' src={flagUs} alt="Flag of United States of America" />
                        English
                    </a>
                </li>
                <li className='header__nav__item'>
                    <a className='header__nav__link language-link' onClick={(e) => { preventDefaultHandler(e); handleLanguageChange('fr'); }} href="">
                        <img className='flag-img' src={flagFr} alt="Flag of France" />
                        French
                    </a>
                </li>
                <li className='header__nav__item'>
                    <a className='header__nav__link language-link' onClick={(e) => { preventDefaultHandler(e); handleLanguageChange('al'); }} href="">
                        <img className='flag-img' src={flagDe} alt="Flag of Germany" />
                        German
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderMenuDropdownTranslate;