import React from 'react';

import Image from '../assets/avatar.png';

import {FaGithub, FaLinkedin, FaTwitter, FaDiscord, FaWhatsapp} from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation'; 

import {motion} from 'framer-motion';

import { fadeIn } from '../variants'

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
  id='home'
  >
    <div className='container mx-auto'>
      <div className='flex flex-col grap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        { }
      <div className='flex-1 text-center font-secondary lg:text-left'>
        <motion.div
        variants={fadeIn('up', 0.4)} 
        initial="hidden" whileInView={'show'} 
        viewport={{once: false, amount: 0.7}} 
        className='mb-6 text-[25px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>

          <motion.div 
          variants={fadeIn('up', 0.3)} 
          initial="hidden" whileInView={'show'} 
          className='flex justify-center mb-8 lg:hidden'>
          <img className='max-w-[280px]' src={Image} alt='' />
          </motion.div>

          <span className='text-white mr-4'>Soy un</span>
          <TypeAnimation sequence={[
            'Programador',
            2000,
            'Diseñador Web',
            2000,
            'Asistente Administrativo',
            2000,
            'Ensamblador de Hardware',
            2000,
            'Emprendedor de E-commerce',
            2000,
          ]}
          speed={45}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
        </motion.div>
          <motion.p
          variants={fadeIn('up', 0.5)} 
          initial="hidden" whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='mb-8 max-w-lg mx-auto lg:mx-0'>Soy un apasionado de la tecnología, introvertido, autónomo y emprendedor. Me encanta aprender sobre las últimas novedades tecnológicas y prefiero trabajar de forma independiente en proyectos innovadores. Soy reflexivo y tomo decisiones por mí mismo. Mi mentalidad empresarial me lleva a buscar constantemente nuevas oportunidades.</motion.p>
          <motion.div
          variants={fadeIn('up', 0.6)} 
          initial="hidden" whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex max-w-max gap-x-6 justify-center items-center mx-auto lg:mx-0'>
          </motion.div>
          <motion.div
          variants={fadeIn('up', 0.7)} 
          initial="hidden" whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='flex text-[30px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a className='linkedin' href='https://www.linkedin.com/in/lkevinquirozp/' target='_blank'>
              <FaLinkedin/>
            </a>
            <a className='github' href='https://github.com/scampt' target='_blank'>
              <FaGithub/>
            </a>
            <a className='twitter' href='https://twitter.com/Scamptyy' target='_blank'>
              <FaTwitter/>
            </a>
            <a className='discord' href='https://discord.com/users/815672517808357407' target='_blank'>
              <FaDiscord/>
            </a>
            <a className='whatsapp' href='https://wa.link/3nwc99' target='_blank'>
              <FaWhatsapp/>
            </a>
          </motion.div>
      </div>
      { }
        <motion.figure
        variants={fadeIn('up', 0.5)} 
        initial="hidden" whileInView={'show'} 
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
        <img src={Image} alt='' />
        </motion.figure>
      </div>
    </div>
  </section>
  );
};

export default Banner;
