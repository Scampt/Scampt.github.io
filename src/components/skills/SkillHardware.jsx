import { useContext } from 'react';
import '../../css/skills/SkillHardware.css';
import { LanguageContext } from '../../LanguageContext';

import imgPCAssembly from '../../assets/skills/hardware/assembly.svg';
import imgPeripheralSetup from '../../assets/skills/hardware/peripherals.svg';
import imgHardwareSecurity from '../../assets/skills/hardware/hardware-security.svg';
import imgNetworkConnectivity from '../../assets/skills/hardware/networks-connectivity.svg';
import imgUPSManagement from '../../assets/skills/hardware/ups-management.svg';
import imgBIOSConfiguration from '../../assets/skills/hardware/bios.svg';
import imgDataStorage from '../../assets/skills/hardware/storage.svg';
import imgSystemTroubleshooting from '../../assets/skills/hardware/troubleshooting.svg';
import imgRemoteAssistance from '../../assets/skills/hardware/remote-assistant.svg';
import OptimizationPerformance from '../../assets/skills/hardware/optimizing.svg';

const skillImages = {
    "PCAssembly": imgPCAssembly,
    "PeripheralSetup": imgPeripheralSetup,
    "HardwareSecurity": imgHardwareSecurity,
    "NetworkConnectivity": imgNetworkConnectivity,
    "UPSManagement": imgUPSManagement,
    "BIOSConfiguration": imgBIOSConfiguration,
    "DataStorage": imgDataStorage,
    "SystemTroubleshooting": imgSystemTroubleshooting,
    "RemoteAssistance": imgRemoteAssistance,
    "OptimizationPerformance": OptimizationPerformance,
};

const SkillHardware = () => {
    const { language } = useContext(LanguageContext);
    const skills = language.SkillHardwareList.skill;
    
    return (
        <div className='skills'>
            <figure className='skills__image__container'>
                <ul className='skills__list'>
                    {skills.map((skill, index) => (
                        <li key={index} className='skills__list__item'>
                            <img
                                className={`skill__hardware__image skill__hardware__image--${skill.id.toLowerCase()}`}
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

export default SkillHardware;