import {motion} from 'framer-motion';

import {fadeIn} from '../variants';


import React, { useState } from 'react';

const ContactForm = () => {
  const [status, setStatus] = useState('');

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
      setStatus('Gracias por su mensaje');
    } else {
      setStatus('Hubo un problema al enviar su mensaje. Inténtelo de nuevo más tarde.');
    }
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {}
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Ponerse en contacto</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>¡Trabajemos <br/>Juntos!</h2>
          </div>
        </motion.div>
    <motion.form 
      variants={fadeIn('left', 0.3)}
      initial='hidden'
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}} 
      className='flex-1 border rounded-2xl flex flex-col gap-y-2.5 pb-24 p-6 items-start' onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre</label>
      <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" id="name" name="name" required />

      <label htmlFor="email">Correo electrónico</label>
      <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="email" id="email" name="_replyto" required />

      <label htmlFor="message">Cuentame tu situación</label>
      <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' id="message" name="message" required></textarea>

      <button className='btn btn-lg' type="submit">Enviar</button>

      {status && <p>{status}</p>}
    </motion.form>
        </div>
      </div>
  </section>
  );
};

export default ContactForm;