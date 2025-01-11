import {useContext} from 'react';
import '../../css/skills/SkillMarketing.css';

import { LanguageContext } from '../../LanguageContext';

import SEO from '../../assets/skills/marketing/seo.svg';

const skillImages = {
    "SEO": SEO,
};


const SkillMarketing = () => {
    const { language } = useContext(LanguageContext);
    const skills = language.SkillMarketingList.skill;
    return (
        <div className='skills'>
            <figure className='skills__image__container'>
                <ul className='skills__list'>
                    {skills.map((skill, index) => (
                        <li key={index} className='skills__list__item'>
                            <img
                                className={`skill__assistant__image skill__assistant__image--${skill.id.toLowerCase()}`}
                                src={skillImages[skill.id]}
                                alt={`Icon of ${skill.name}`}
                            />
                            <h3 className='skills__title'>{skill.name}</h3>
                        </li>
                    ))}
                </ul>
            </figure>
        </div>

        
    );
}

export default SkillMarketing;