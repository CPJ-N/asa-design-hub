'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 0.6,
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.6,
      },
    },
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-6xl">
              👤
            </div>
          </motion.div>

          {/* Name Animation */}
          <div className="space-y-4">
            <motion.div
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight">
                {'ARPIT'.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={nameVariants}
                    className="inline-block gradient-text"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              className="overflow-hidden"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight">
                {'AHLUWALIA'.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + 5}
                    variants={nameVariants}
                    className="inline-block gradient-text"
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
          </div>

          {/* Star Icon */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="w-12 h-12 text-primary"
          >
            <svg viewBox="0 0 48 48" fill="currentColor">
              <path d="M 22.75 48 C 20.903 37.41 10.483 27.457 0 25.25 L 0 22.625 C 10.549 20.105 20.686 10.941 22.75 0 L 25.375 0 C 27.169 10.66 37.542 20.343 48 22.625 L 48 25.25 C 37.735 27.377 27.106 37.364 25.375 48 Z" />
            </svg>
          </motion.div>

          {/* Introduction Text */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-light/90 leading-relaxed font-body">
              Hi! I'm Arpit - a <span className="text-primary font-semibold">UI/UX Designer</span> with 5+ years of experience creating meaningful solutions that drive impact.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-light/90 leading-relaxed font-body mt-4">
              I'm currently studying my{' '}
              <a
                href="https://www.newschool.edu/parsons/ms-design-management/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-all"
              >
                MS in Strategic Design & Management
              </a>{' '}
              at Parsons School of Design in NYC.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-light/90 leading-relaxed font-body mt-4">
              I'm also looking for <span className="text-primary font-semibold">part-time roles in UX!</span>
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={scrollIndicatorVariants}
            initial="hidden"
            animate="visible"
            className="scroll-indicator pt-12"
          >
            <div className="relative w-1 h-12">
              <div className="absolute inset-0 bg-light/20 rounded-full" />
              <motion.div
                className="absolute top-0 left-0 right-0 h-4 bg-primary rounded-full"
                animate={{
                  y: [0, 32, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
            <p className="text-xs font-mono tracking-widest text-light/50 mt-2">SCROLL</p>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
