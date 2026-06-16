import { ChevronDown, Star } from 'lucide-react';
import { SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiGithub } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import NeonButton from '../ui/NeonButton';
import AnimatedStatCard from '../ui/AnimatedStatCard';
import FloatingProfileImage from '../ui/FloatingProfileImage';
import { heroContainer, fadeInLeft, fadeInUp, statItem, techIcon, charReveal } from '../../utils/motionVariants';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  const [typed, setTyped] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const headingText = PERSONAL_INFO.title;
  const headingChars = headingText.split('');

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTyped(headingText.slice(0, index + 1));
      index += 1;
      if (index > headingText.length) {
        clearInterval(typing);
      }
    }, 45);
    return () => clearInterval(typing);
  }, [headingText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((visible) => !visible);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const techLogos = [
    { label: 'React', icon: SiReact },
    { label: 'Node.js', icon: SiNodedotjs },
    { label: 'Tailwind', icon: SiTailwindcss },
    { label: 'MongoDB', icon: SiMongodb },
  ];

  return (
    <section className='relative overflow-hidden bg-black pt-24 pb-20'>
      <div className='absolute inset-0 -z-10'>
        <RadialGradientBackground variant='hero' />
        <motion.div
          className='absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#22c55e]/10 blur-3xl'
          animate={{ opacity: [0.15, 0.55, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#22c55e]/8 blur-3xl'
          animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_40%)]'
          aria-hidden='true'
        />
      </div>

      <div className='relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-5 sm:px-6 lg:px-8'>
        <motion.div
          variants={heroContainer}
          initial='hidden'
          animate='show'
          className='grid gap-10 lg:grid-cols-[1.2fr_0.95fr] lg:items-center'
        >
          <motion.div variants={fadeInLeft} className='space-y-8'>
            <div className='inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur'>
              <Star className='h-4 w-4 text-[#22c55e]' />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            <div className='space-y-4'>
              <p className='text-xs uppercase tracking-[0.35em] text-[#22c55e]/70'>MERN · AI · Scalable apps</p>
              {/* <h1 className='text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl'>
                <span className='block'>Hi, I&apos;m <span className='text-[#22c55e]'>Sandhya Rai</span></span>
                <span className='block mt-2 text-3xl font-semibold text-white/80 sm:text-4xl lg:text-5xl'>
                  {headingChars.map((char, index) => (
                    <motion.span key={`${char}-${index}`} custom={index} variants={charReveal} className='inline-block'>
                      {char}
                    </motion.span>
                  ))}
                  <span className='inline-block ml-1 h-8 w-1 rounded-full bg-[#22c55e] transition-opacity duration-200' style={{ opacity: cursorVisible ? 1 : 0 }} />
                </span>
              </h1> */}
              
            </div>

            <motion.p variants={fadeInUp} className='max-w-2xl text-lg leading-8 text-white/70'>
              I design and build premium MERN applications with AI research at the core. My portfolio blends engineering, UX, and performance to deliver production-grade experiences recruiters notice.
            </motion.p>

            <motion.div variants={fadeInUp} className='flex flex-col gap-4 sm:flex-row'>
              <NeonButton onClick={() => window.open(PERSONAL_INFO.resume, '_blank')} label='Download Resume' />
              <NeonButton onClick={() => scrollToSection('contact')} label='Contact Me' secondary />
            </motion.div>

            <motion.div variants={fadeInUp} className='flex flex-wrap items-center gap-3'>
              <a
                href={SOCIAL_LINKS.github}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80 transition hover:border-[#22c55e]/40 hover:text-[#22c55e]'
              >
                <SiGithub className='h-4 w-4' /> GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80 transition hover:border-[#22c55e]/40 hover:text-[#22c55e]'
              >
                <AiFillLinkedin className='h-4 w-4' /> LinkedIn
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
              {STATS.map((stat, index) => (
                <motion.div key={index} variants={statItem}>
                  <AnimatedStatCard label={stat.label} value={stat.value} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className='relative mx-auto w-full max-w-[480px]'>
            <FloatingProfileImage alt={PERSONAL_INFO.name} />

            <motion.div
              variants={heroContainer}
              className='mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4'
            >
              {techLogos.map(({ label, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  variants={techIcon}
                  whileHover={{ y: -6, scale: 1.06, rotate: 2 }}
                  className='flex items-center justify-center rounded-3xl border border-white/10 bg-black/40 p-4 text-[#22c55e] shadow-[0_20px_50px_rgba(0,0,0,0.22)]'
                >
                  <Icon className='h-6 w-6' aria-label={label} />
                </motion.div>
              ))}
            </motion.div>

            <div className='pointer-events-none absolute inset-x-0 bottom-0 mx-auto hidden h-24 w-24 rounded-full bg-[#22c55e]/10 blur-3xl md:block' />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('about')}
        whileHover={{ y: -4 }}
        className='absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#22c55e]/25 bg-black/40 p-3 text-[#22c55e] shadow-[0_20px_40px_rgba(0,0,0,0.35)] backdrop-blur'
      >
        <ChevronDown className='h-7 w-7' />
      </motion.button>
    </section>
  );
};

export default Hero;

