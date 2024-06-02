export const fadeIn = (direction, delay = 0, duration = 1.2) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const slideIn = (direction, delay = 0, duration = 1.2) => {
  return {
    hidden: {
      x: direction === 'left' ? -300 : direction === 'right' ? 300 : 0,
      y: direction === 'up' ? -300 : direction === 'down' ? 300 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
};

export const zoomIn = (delay = 0, duration = 1.2) => {
  return {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: duration,
        delay: delay,
        stiffness: 260,
        damping: 20,
      },
    },
  };
};

export const rotateIn = (delay = 0, duration = 1.2) => {
  return {
    hidden: {
      rotate: -180,
      opacity: 0,
    },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: duration,
        delay: delay,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
};

export const bounceIn = (delay = 0, duration = 1.2) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: [0.8, 1.1, 0.9, 1.03, 0.97, 1],
      opacity: 1,
      transition: {
        type: 'spring',
        duration: duration,
        delay: delay,
        stiffness: 300,
        damping: 20,
      },
    },
  };
};

export const skillVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

export const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export const titleVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};