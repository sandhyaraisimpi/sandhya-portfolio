import { motion, useMotionValue } from 'framer-motion';
import { useMemo, useState } from 'react';

const FloatingProfileImage = ({ alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const profileImage = useMemo(
    () => new URL('/developer-portrait.png', import.meta.url).href,
    []
  );

  const fallbackLabel = useMemo(() => {
    const name = alt || 'Sandhya Rai';
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  }, [alt]);

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - left) / width - 0.5;
    const py = (event.clientY - top) / height - 0.5;
    x.set(px * 14);
    y.set(py * 14);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className='relative mx-auto aspect-square w-full max-w-[420px] rounded-[32px] border border-[#22c55e]/20 bg-black/40 p-1 shadow-[0_35px_120px_rgba(34,197,94,0.12)]'
      animate={{ y: [0, -10, 0, -6, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.01 }}
    >
      <div className='absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#22c55e]/15 via-transparent to-[#22c55e]/10 blur-2xl opacity-60' />
      <div className='relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1117]'>
        {!hasError ? (
          <motion.img
            src={profileImage}
            alt={alt}
            className='h-full w-full object-cover'
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: loaded ? 1 : 0.2, scale: loaded ? 1 : 1.05 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onLoad={() => setLoaded(true)}
            onError={() => setHasError(true)}
            whileHover={{ scale: 1.04 }}
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-[#111315] text-center'>
            <div className='flex h-32 w-32 items-center justify-center rounded-full border border-[#22c55e]/30 bg-[#0a0b11]/80 text-3xl font-semibold tracking-[0.18em] text-white/85'>
              {fallbackLabel}
            </div>
          </div>
        )}
      </div>
      <div className='pointer-events-none absolute inset-x-12 bottom-8 rounded-full border border-[#22c55e]/20 bg-white/5 p-3 backdrop-blur-sm'>
        <div className='flex items-center justify-center gap-3 text-white/80'>
          <div className='h-2 w-2 rounded-full bg-[#22c55e]' />
          <span className='text-xs uppercase tracking-[0.22em]'>Visual system | Creative profile</span>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingProfileImage;
