import React from 'react';
import { BsFillPeopleFill, BsFillBriefcaseFill, BsFillPersonFill, BsFillChatFill, BsPaintBucket, BsPen, BsPenFill, BsPencil, BsBrush, BsBrushFill, BsCode, BsServer, BsBrowserChrome, BsBrowserSafari } from 'react-icons/bs'; // Importar los íconos que deseas usar

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Planeación y creación',
    description: 'Aquí es donde comienza la idea de cómo se verá la página web. Se definen aspectos como los colores, la ubicación de cada elemento, las animaciones y las interacciones que se producirán cuando se oprima un elemento determinado.',
    icon: <BsBrushFill />
  },
  {
    name: 'Desarrollar y programar ',
    description: 'Comenzamos a desarrollar nuestro borrador y analizamos la complejidad del proyecto para saber que herramientas utilizar, si código como HTML, CSS o Javascript o podemos usar una plataforma de gestión de contenido como Wordpress.',
    icon: <BsCode />
  },
  {
    name: 'Alojamiento Web',
    description: 'Una vez completada la página web, el siguiente paso es buscar un servicio de alojamiento web para que esté disponible en internet y las personas puedan encontrarla en los motores de búsqueda.',
    icon: <BsServer />
  },
  {
    name: 'Adquisición y configuración de dominio',
    description: 'Por último, configurarmos el dominio que se utilizará y establecer la dirección de correo electrónico empresarial correspondiente. Esto transmitirá una imagen profesional y demostrará que se sabe administrar el negocio de manera eficiente.',
    icon: <BsBrowserSafari />
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-6'>¿Qué hago?</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Me dedico a planificar y crear páginas web utilizando diversas herramientas y estrategias para asegurar su atractivo visual y accesibilidad desde cualquier dispositivo para el usuario.</h3>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'
          >
            <div>
              {services.map((service, index)=> {
                const {name, description, icon} = service; // Añadir el icono correspondiente a la variable 'icon'
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      {icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
