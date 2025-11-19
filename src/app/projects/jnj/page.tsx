'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ModernNav } from '../../components/ModernNav';
import { ModernFooter } from '../../components/ModernFooter';

export default function JNJPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen bg-secondary">
      <ModernNav />
      {/* Back Button */}
      <div className="container pt-32 pb-8">
        <Link href="/projects">
          <motion.button
            className="flex items-center gap-2 text-light/60 hover:text-primary transition-colors"
            whileHover={{ x: -5 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pb-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="max-w-6xl"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                Healthcare Platform • 2018-2020
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-display font-black mb-8 gradient-text"
            >
              JOHNSON & JOHNSON
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-light mb-12 max-w-4xl leading-relaxed"
            >
              Redesigning healthcare platform solutions for medical professionals and patients, focusing on accessibility and user engagement.
            </motion.p>

            {/* Hero Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-red-500/20 to-pink-500/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-display font-black text-light/10">J&J</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 border-t border-light/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="grid md:grid-cols-3 gap-12 max-w-6xl"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-mono tracking-wider text-light/50 mb-3 uppercase">Role</h3>
              <p className="text-xl text-light">UX/UI Designer</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-mono tracking-wider text-light/50 mb-3 uppercase">Timeline</h3>
              <p className="text-xl text-light">2018 - 2020</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-mono tracking-wider text-light/50 mb-3 uppercase">Focus</h3>
              <p className="text-xl text-light">Patient Portal, Accessibility</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 border-t border-light/10">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              The Challenge
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 leading-relaxed mb-12"
            >
              The existing patient portal was outdated, difficult to navigate, and not accessible to users with disabilities. Patient engagement was low, and medical professionals were frustrated with the platform's limitations.
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              The Solution
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 leading-relaxed"
            >
              Led a complete redesign focusing on accessibility (WCAG 2.1 AA compliance), intuitive navigation, and features that medical professionals actually needed. The result was a modern, user-friendly platform that significantly improved patient engagement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 border-t border-light/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold mb-12"
            >
              Key Features
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
              {[
                {
                  title: 'Accessible Patient Portal',
                  description: 'WCAG 2.1 AA compliant interface ensuring all patients can access their health information',
                },
                {
                  title: 'Appointment Management',
                  description: 'Streamlined scheduling system for patients and medical staff',
                },
                {
                  title: 'Medical Records Access',
                  description: 'Secure, easy-to-navigate system for viewing and downloading health records',
                },
                {
                  title: 'Medication Tracking',
                  description: 'Visual medication schedule and refill management system',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  custom={index}
                  className="card"
                >
                  <h3 className="text-2xl font-display font-bold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-light/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 border-t border-light/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="max-w-4xl"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold mb-12"
            >
              Impact & Results
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: '60%', label: 'Increase in patient engagement' },
                { metric: '100%', label: 'WCAG 2.1 AA compliance' },
                { metric: '15+', label: 'Cross-functional teams collaborated' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  custom={index}
                  className="card text-center"
                >
                  <div className="text-5xl font-display font-black text-primary mb-3">
                    {stat.metric}
                  </div>
                  <p className="text-light/70">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-light/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Interested in healthcare design?
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <motion.button
                  className="btn btn-primary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  className="btn btn-secondary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <ModernFooter />
    </main>
  );
}
