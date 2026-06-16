import { motion, useMotionValue, useMotionValueEvent, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedStatCard = ({ label, value }) => {
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState('0');
  const numericValue = parseInt(String(value).replace(/\D/g, ''), 10);
  const suffix = String(value).replace(/^\d+/, '');

  useMotionValueEvent(motionValue, 'change', (latest) => {
    if (!Number.isNaN(latest)) {
      setDisplayValue(String(Math.round(latest)) + suffix);
    }
  });

  useEffect(() => {
    if (!Number.isNaN(numericValue)) {
      const controls = animate(motionValue, numericValue, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }
    setDisplayValue(value);
  }, [numericValue, value, motionValue]);

  return (
    <motion.div
      className='rounded-3xl border border-white/10 bg-black/35 backdrop-blur-xl p-5 shadow-[0_20px_80px_rgba(0,0,0,0.18)]'
      whileHover={{ y: -6, boxShadow: '0 25px 70px rgba(34,197,94,0.18)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <p className='text-3xl md:text-4xl font-semibold text-[#22c55e] tracking-tight'>{displayValue}</p>
      <p className='mt-2 text-sm uppercase tracking-[1px] text-white/60'>{label}</p>
    </motion.div>
  );
};

export default AnimatedStatCard;
