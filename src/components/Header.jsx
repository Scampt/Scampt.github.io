import { motion } from 'framer-motion';
import { fadeIn } from '../config/variants.js';
import HeaderMenuDropdownTranslate from '../components/HeaderMenuDropdownTranslate';
import ColorMode from './ColorMode';
import Logo from '../assets/logo.png';
import '../css/Header.css';

const Header = ({ setIsLoading }) => {
    return (
        <header className='header'>
            <div className="header__container">
                <a href="https://www.kevinquiroz.vercel.app" className="header__link link-logo">
                    <img className='header__logo' src={Logo} alt="Logo de Kevin Quiroz" />
                </a>
                <div className="header__name__container">
                    <motion.h1
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'whileInView={'show'}
                        viewport={{once: false, amount: 0.7}} 
                        className='header__text'
                    >
                        Kevin Quiroz
                    </motion.h1>
                </div>
                <ColorMode />
                <HeaderMenuDropdownTranslate setIsLoading={setIsLoading} />
            </div>
        </header>
    );
};

export default Header;