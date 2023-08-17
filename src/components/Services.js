import React from 'react';
import { BsPaintBucket, BsPen, BsPenFill, BsPencil, BsBrush, BsBrushFill, BsCode, BsServer, BsBrowserChrome, BsBrowserSafari, BsWindowDesktop, BsWindow, BsCart, BsSearch, BsPhone, BsCloud, BsCalendar, BsCalendar2 } from 'react-icons/bs'; // Importar los íconos que deseas usar

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'Desarrollo Web',
    description: 'Utilizo mis conocimientos en HTML, CSS y JS para crear páginas web visualmente atractivas y funcionales. Establezco colores, diseños y animaciones que realzan la experiencia del usuario.',
    icon: <BsWindow />
  },
  {
    name: 'Plataformas CMS',
    description: 'Manejo eficazmente plataformas como Wordpress, Shopify y Tiendanube. Configuro y personalizo sitios web, optimizando la gestión de contenido y brindando soluciones de ecommerce.',
    icon: <BsCart />
  },
  {
    name: 'SEO',
    description: 'Implemento estrategias de optimización para motores de búsqueda (SEO) para aumentar la visibilidad en línea y mejorar el ranking en los resultados de búsqueda. ',
    icon: <BsSearch />
  },
  {
    name: 'Flutter',
    description: 'Desarrollo aplicaciones móviles multiplataforma utilizando Flutter, lo que permite crear experiencias consistentes en iOS y Android.',
    icon: <BsPhone />
  },
  {
    name: 'Alojamiento y Dominio',
    description: 'Gestiono el alojamiento web y la configuración de dominios, asegurando que los sitios estén disponibles en línea y se alineen con la identidad de la marca.',
    icon: <BsCloud />
  },
  {
    name: 'Productividad',
    description: 'Hago uso experto de Microsoft Office para tareas de organización, comunicación y generación de documentos profesionales. Optimizo flujos de trabajo y colaboración.',
    icon: <BsCalendar2 />
  },
  {
    name: 'Diseño Creativo',
    description: 'Utilizo Adobe Suite para materializar ideas en diseños visuales atractivos. Creo logotipos, gráficos y elementos visuales que reflejan la identidad y mensaje de marca.',
    icon: <BsBrush />
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto mt-10'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 bg-350px'
          >
            <h2 className='h2 text-accent mb-6'>Dominio Profesional</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Desde la planificación y creación de páginas web hasta estrategias de diseño centradas en el usuario, mi enfoque abarca una variedad de habilidades y herramientas relacionadas con la web y el diseño.</h3>
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
                  <div className='border-b border-white/20 mb-[2px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-7'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end mt-3'>
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
