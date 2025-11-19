'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function ModernFooter() {
  const socialLinks = [
    {
      name: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/arpitahluwalia/',
    },
    {
      name: 'BEHANCE',
      href: 'https://www.behance.net/spartacau5?locale=en_US',
    },
    {
      name: 'SPOTIFY',
      href: 'https://open.spotify.com/artist/3b9yCm5iWBKNIDqq1utESQ?si=CVFljP-9Sb2tAA63Chf0tw',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-secondary border-t border-light/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Social Links Marquee */}
          <div className="mb-16 overflow-hidden">
            <motion.div
              className="flex gap-12"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* Repeat social links for continuous scroll */}
              {[...Array(6)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-12 shrink-0">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={`${groupIndex}-${index}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-6xl md:text-8xl font-display font-black text-light/10 hover:text-primary/30 transition-colors whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  {/* Separator Star */}
                  <div className="flex items-center justify-center shrink-0">
                    <svg
                      className="w-8 h-8 text-light/10"
                      viewBox="0 0 48 48"
                      fill="currentColor"
                    >
                      <path d="M 22.75 48 C 20.903 37.41 10.483 27.457 0 25.25 L 0 22.625 C 10.549 20.105 20.686 10.941 22.75 0 L 25.375 0 C 27.169 10.66 37.542 20.343 48 22.625 L 48 25.25 C 37.735 27.377 27.106 37.364 25.375 48 Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Footer Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Column 1 - About */}
            <div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                ARPIT AHLUWALIA
              </h3>
              <p className="text-light/70 mb-6">
                UI/UX Designer creating meaningful solutions that drive impact. Currently studying MS in Strategic Design & Management at Parsons.
              </p>
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-primary hover:gap-4 transition-all group"
                whileHover={{ x: 5 }}
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                <span className="text-sm font-mono tracking-wider">BACK TO TOP</span>
              </motion.button>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h3 className="text-lg font-display font-bold text-primary mb-4 tracking-wider">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Projects', href: '/projects' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <motion.span
                        className="text-light/70 hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                      >
                        <span className="w-0 h-px bg-primary group-hover:w-6 transition-all" />
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Contact */}
            <div>
              <h3 className="text-lg font-display font-bold text-primary mb-4 tracking-wider">
                GET IN TOUCH
              </h3>
              <div className="space-y-3">
                <motion.a
                  href="mailto:arpit.ahluwalia1@gmail.com"
                  className="block text-light/70 hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  arpit.ahluwalia1@gmail.com
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/arpitahluwalia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-light/70 hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  LinkedIn
                </motion.a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-6">
                {[
                  {
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/arpitahluwalia',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Behance',
                    href: 'https://www.behance.net/spartacau5',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Spotify',
                    href: 'https://open.spotify.com/artist/3b9yCm5iWBKNIDqq1utESQ',
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-primary hover:text-secondary transition-all"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-light/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-light/50">
            <p>© {new Date().getFullYear()} Arpit Ahluwalia. All rights reserved.</p>
            <p className="font-mono">Designed & Developed with passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
