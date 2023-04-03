import React from 'react';

import {motion} from 'framer-motion';

import { fadeIn} from '../variants';

import Logo from '../assets/logo.png'

const Header = () => {
  return (
  <header className='pt-5'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {}
        <a href='https://www.scampt.github.io'>
          <img className='logo' src={Logo} alt=""/>
        {}
        </a>
        <div className='flex-1 text-end font-secondary text-accent lg:text-right'>
          <motion.h1
            variants={fadeIn('up', 0.3)} 
            initial="hidden" whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'>
          Kevin <span>Quiroz</span>
          </motion.h1>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;
