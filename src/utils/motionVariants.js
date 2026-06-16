export const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -36 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 18,
      mass: 0.8,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
      damping: 20,
      mass: 0.85,
    },
  },
};

export const statItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 22,
      duration: 0.7,
    },
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.04,
    boxShadow: '0 0 28px rgba(34, 197, 94, 0.24)',
  },
  whileTap: { scale: 0.96 },
};

export const floatAnimation = {
  animate: {
    y: [0, -12, 0, -8, 0],
    transition: {
      duration: 9,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

export const techIcon = {
  hidden: { opacity: 0, y: 28, scale: 0.88 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const charReveal = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.33,
      ease: 'easeOut',
      delay: i * 0.04,
    },
  }),
};

export const glowText = {
  hidden: { color: '#ffffff' },
  show: {
    color: '#22c55e',
    textShadow: '0 0 24px rgba(34, 197, 94, 0.24)',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
