import {useContext} from 'react';
import '../../css/skills/SkillAssistant.css';

import { LanguageContext } from '../../LanguageContext';

import Word from '../../assets/skills/assistant/word.svg';
import Excel from '../../assets/skills/assistant/excel.svg';
import PowerPoint from '../../assets/skills/assistant/power-point.svg';
import Slack from '../../assets/skills/assistant/slack.svg';
import Notion from '../../assets/skills/assistant/notion.svg';
import TeamWorking from '../../assets/skills/assistant/teamworking.svg';
import ProyectManagment from '../../assets/skills/assistant/proyect-managment.svg';
import CustomerSupport from '../../assets/skills/assistant/customer-support.svg';
import ReportStatus from '../../assets/skills/assistant/report-status.svg';
import EmailManagment from '../../assets/skills/assistant/email-managment.svg';

const skillImages = {
    "Word": Word,
    "Excel": Excel,
    "PowerPoint": PowerPoint,
    "Slack": Slack,
    "Notion": Notion,
    "TeamWorking": TeamWorking,
    "ProyectManagment": ProyectManagment,
    "CustomerSupport": CustomerSupport,
    "ReportsStatus": ReportStatus,
    "EmailManagment": EmailManagment
};


const SkillAssistant = () => {
    const { language } = useContext(LanguageContext);
    const skills = language.SkillAssistantList.skill;
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

export default SkillAssistant;