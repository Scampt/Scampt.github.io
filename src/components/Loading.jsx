import {useContext} from 'react';
import '../css/Loading.css';
import { LanguageContext } from '../LanguageContext';

const Loading = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <div className="loading-text">{language.loadingText}</div>
        </div>
    );
};

export default Loading;