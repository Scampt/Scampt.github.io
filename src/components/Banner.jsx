import React, { useContext } from 'react';
import Avatar from '../assets/avatar.png';
import'../css/Banner.css';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../config/variants';
import { LanguageContext } from '../LanguageContext';

import { FaLinkedin, FaGithub, FaDiscord, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

const Banner = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div className="banner w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left gap-8 lg:h-[80vh] md:mb-0 2xl:gap-52">
            <motion.figure
                variants={fadeIn('left', 0.4)} 
                initial="hidden"
                animate="show"
                className="max-w-xs lg:max-w-md mb-5 lg:mr-8"
            >
                <img className='w-full' src={Avatar} alt="Avatar de Kevin Quiroz" />
            </motion.figure>
            
            <div className="lg:w-1/2 text-center lg:text-left">
                <motion.div
                    variants={fadeIn('up', 0.4)} 
                    initial="hidden"
                    animate="show"
                    className='mb-5 font-black text-2xl lg:text-4xl uppercase font-aldrich'
                >
                    <span className='banner__main__info'>{language.imA} </span>
                    <React.Fragment key={language.imA}>
                        <TypeAnimation
                            sequence={language.typeAnimation.sequence}
                            speed={language.typeAnimation.speed}
                            className='text-red-700 mx-auto'
                            wrapper='span'
                            repeat={Infinity}
                        />
                    </React.Fragment>
                </motion.div>
                
                <motion.p
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    className="leading-7 text-lg lg:text-xl font-light break-words font-rajdhani"
                >
                    {language.aboutMeShort}
                </motion.p>
                
                <motion.div
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    animate="show"
                    className="flex gap-8 my-8 justify-center lg:justify-start"
                >
                    <a className='social__link linkedin' href="https://www.linkedin.com/in/kevinquirozmx/"><FaLinkedin /></a>
                <a className='social__link github' href="https://github.com/scampt/"><FaGithub /></a>
                <a className='social__link x' href="https://twitter.com/KevinQuirozMX"><BsTwitterX /></a>
                <a className='social__link instagram' href="https://www.instagram.com/kevinquirozmx/?hl=es"><FaInstagram /></a>
                <a className='social__link discord' href="https://discord.com/users/815672517808357407"><FaDiscord /></a>
                <a className='social__link whatsapp' href="https://wa.me/527351842906"><FaWhatsapp /></a>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;