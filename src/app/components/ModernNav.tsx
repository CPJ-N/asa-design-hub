'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function ModernNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'CONTACT', href: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: -300,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-12 h-10 text-primary"
                  viewBox="0 0 87 69"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M 2 47 C 3.235 53.693 10.502 56.357 13.42 51.881 C 16.522 42.781 15.541 44.019 18.411 32.408 C 20.928 22.229 23.354 8.595 23.354 7.913 C 23.354 6.548 24.534 52.4 33.386 54.378 C 46.664 56.156 44.843 47.163 39.572 43.873 C 34.301 40.582 30.965 39.458 32.633 34.378 C 34.301 29.298 39.435 26.9 46.015 27.882 C 52.596 28.864 48.86 52.998 48.494 55.366 C 48.127 57.734 62.5 13 62.5 13 C 62.5 13 66.861 61.016 74.5 55.5 C 82.139 49.984 80 47 80 47" />
                </svg>
                <span className="text-2xl font-display font-bold text-primary hidden sm:block">
                  AA
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    className="text-sm font-mono tracking-wider text-light/70 hover:text-primary transition-colors cursor-pointer relative group"
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </motion.span>
                </Link>
              ))}
              <motion.a
                href="https://drive.google.com/file/d/1NQZGgKqecdKRg7RAV-TEtg1VdSdfuYtV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm px-6 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                RESUME
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-primary rounded-full"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-5 h-0.5 bg-primary rounded-full"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-7 h-0.5 bg-primary rounded-full"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-secondary/95 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 bottom-0 w-80 glass z-50 md:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {menuItems.map((item) => (
                      <motion.li key={item.name} variants={itemVariants}>
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          <motion.span
                            className="text-3xl font-display font-bold text-light hover:text-primary transition-colors cursor-pointer block"
                            whileHover={{ x: 10 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <motion.div variants={itemVariants} className="pt-8">
                  <a
                    href="https://drive.google.com/file/d/1NQZGgKqecdKRg7RAV-TEtg1VdSdfuYtV/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    DOWNLOAD RESUME
                  </a>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex gap-4 pt-6 justify-center"
                >
                  {[
                    {
                      name: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/arpitahluwalia',
                      icon: 'L',
                    },
                    {
                      name: 'Behance',
                      href: 'https://www.behance.net/spartacau5?locale=en_US',
                      icon: 'B',
                    },
                    {
                      name: 'Spotify',
                      href: 'https://open.spotify.com/artist/3b9yCm5iWBKNIDqq1utESQ',
                      icon: 'S',
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-primary hover:text-secondary transition-all font-display font-bold"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
