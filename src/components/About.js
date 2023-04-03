import React from 'react';

import CountUp from 'react-countup';

import {useInView} from 'react-intersection-observer';

import {motion} from 'framer-motion';

import { fadeIn} from '../variants';


const About = () => {
  const [ref, InView] = useInView ({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      { }
      <motion.figure
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
        </motion.figure>
      { }
      <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
        <h2 className='h2 text-center text-accent'>Sobre mí</h2>
        <h3 className='h3 text-center mb-4'>Soy un Diseñador Web</h3>
        <p className='mb-6 text-center'>Soy una persona habilidosa en el desarrollo web y en el mantenimiento de hardware informático. Además, puedo optimizar sistemas operativos para garantizar su máximo rendimiento. También tengo experiencia en la administración de inventarios, lo que me permite mantener un control adecuado sobre el stock de productos disponibles. Además, puedo encargarme de llevar un registro diario de las ventas, lo que me permite analizar los datos y tomar decisiones informadas para mejorar el desempeño de la empresa. </p>
    {}
    <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
        </div>
          <div className='flex gap-x-8 items-center'>
        </div>
      </motion.div>
    </div>
  </div>
    </section>
  );
};

export default About;
