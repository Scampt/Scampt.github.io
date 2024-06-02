import { useContext } from 'react';
import Me from '../assets/me.png';
import '../css/AboutMe.css';
import { LanguageContext } from '../LanguageContext';
import { motion } from 'framer-motion';
import { fadeIn } from '../config/variants';

const About = () => {
    const { language } = useContext(LanguageContext);

    return (
        <motion.section 
            className='aboutMe max-w-[1200px] mx-auto flex flex-col items-center px-4 lg:h-[80vh] lg:flex-row-reverse lg:justify-between lg:items-center'
            variants={fadeIn('right', 0.3)} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: false, amount: 0.3 }}
        >
            <motion.figure 
                className='aboutMe__container flex justify-center mt-3'
                variants={fadeIn('right', 0.3)}
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: false, amount: 0.3 }}
            >
                <img className='w-60 lg:w-96 aboutMe__img' src={Me} alt="Image of Kevin Quiroz" />
            </motion.figure>

            <div className='flex flex-col items-center lg:items-center'>
                <motion.h2 
                    className='general__title text-3xl font-bold mb-4'
                    variants={fadeIn('left', 0.3)}
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {language.aboutMeTitle}
                </motion.h2>
                
                <motion.p 
                    className='lg:w-2/3 text-lg leading-7 px-8 font-rajdhani text-center lg:text-left'
                    variants={fadeIn('left', 0.3)}
                    initial="hidden" 
                    whileInView="show" 
                    viewport={{ once: false, amount: 0.3 }}
                >
                    {language.aboutMeDescription}
                </motion.p>
            </div>
        </motion.section>
    );
};

export default About;