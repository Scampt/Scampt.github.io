import { useState, useContext, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import '../css/Skills.css';
import { LanguageContext } from '../LanguageContext';
import SkillWeb from './skills/SkillWeb';
import SkillHardware from './skills/SkillHardware';
import SkillAssistant from './skills/SkillAssistant';
// import SkillMarketing from './skills/SkillMarketing.jsx';
import { skillVariants, sectionVariant, titleVariant } from '../config/variants';

const Skills = () => {
    const { language } = useContext(LanguageContext);
    const [activeSkill, setActiveSkill] = useState('web');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    const renderActiveSkill = () => {
        switch (activeSkill) {
            case 'web':
                return <SkillWeb key="web" />;
            case 'hardware':
                return <SkillHardware key="hardware" />;
            case 'assistant':
                return <SkillAssistant key="assistant" />;
            // case 'marketing':
            //     return <SkillMarketing key="marketing" />;
            default:
                return <SkillWeb key="web" />;
        }
    };

    return (
        <motion.section 
            className='skills'
            ref={ref}
            variants={sectionVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            exit="exit"
            transition={{ duration: 0.5 }}
        >
            <motion.h2 
                className='general__title'
                variants={titleVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {language.SkillsTitle}
            </motion.h2>
            <motion.nav 
                className='skills__section'
                variants={titleVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <ul className='skills__section__menu'>
                    <li className={`skills__list__item ${activeSkill === 'web' ? 'active' : ''}`}>
                        <a
                            className='skills__item__section'
                            href="#web"
                            onClick={() => setActiveSkill('web')}
                        >
                            {language.SkillsTitleWeb}
                        </a>
                    </li>
                    <li className={`skills__list__item ${activeSkill === 'hardware' ? 'active' : ''}`}>
                        <a
                            className='skills__item__section'
                            href="#hardware"
                            onClick={() => setActiveSkill('hardware')}
                        >
                            {language.SkillsTitleHardware}
                        </a>
                    </li>
                    <li className={`skills__list__item ${activeSkill === 'assistant' ? 'active' : ''}`}>
                        <a
                            className='skills__item__section'
                            href="#assistant"
                            onClick={() => setActiveSkill('assistant')}
                        >
                            {language.SkillsTitleAssistant}
                        </a>
                    </li>
                </ul>
            </motion.nav>
            <div className='skills__content'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSkill}
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="skill-content-container"
                    >
                        {renderActiveSkill()}
                    </motion.div>
                </AnimatePresence>
            </div>
        </motion.section>
    );
}

export default Skills;