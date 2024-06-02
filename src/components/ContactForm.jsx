import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import contact from '../assets/contact.png';
import '../css/ContactForm.css'
import { LanguageContext } from '../LanguageContext';

const ContactForm = () => {
    const [status, setStatus] = useState('');
    const { language } = useContext(LanguageContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch('https://formspree.io/f/mayzpleg', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.status === 200) {
            form.reset();
            setStatus(language.contactForm.successMessage);
        } else {
            setStatus(language.contactForm.errorMessage);
        }
    };

    return (
        <motion.footer 
            className='footer flex flex-col md:flex-row items-center justify-center mt-8 mb-24'
            id='contact'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="md:w-1/2 mx-4 md:mx-8">
                <h3 className='footer__text__contact general__title'>{language.formTitle}</h3>
                <img className='footer__contact__img  max-w-xl mx-auto' src={contact} alt='Form Image Contact of Kevin Quiroz Portfolio'/>
            </div>
            <motion.form 
                className='form w-full md:w-1/2 mx-4 md:mx-8'
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <div className="form__container border border-gray-300 rounded-lg p-4 font-rajdhani">
                    <label htmlFor="name">{language.formName}</label>
                    <input className='form__input' type="text" id="name" name="name" required />

                    <label htmlFor="lastName">{language.formLastName}</label>
                    <input className='form__input' type="text" id="lastName" name="lastName" />

                    <label htmlFor="email">{language.formEmail}</label>
                    <input className='form__input' type="email" id="email" name="_replyto" required />

                    <label htmlFor="message">{language.formMessage}</label>
                    <textarea className='form__input form__message' id="message" name="message" required></textarea>

                    <button className='form__button' type="submit">{language.formSubmit}</button>

                    {status && <p>{status}</p>}
                </div>
            </motion.form>
        </motion.footer>
    );
};

export default ContactForm;