'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ModernNav } from '../../components/ModernNav';
import { ModernFooter } from '../../components/ModernFooter';

export default function ZoomInfoPage() {
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

  const subProjects = [
    {
      title: 'Job Description Parser',
      slug: 'parser',
      description: 'AI-powered tool that helps recruiters parse and analyze job descriptions',
      impact: '40% increase in recruiter efficiency',
    },
    {
      title: 'Layoffs Tracker',
      slug: 'ticker',
      description: 'Real-time tracking system for industry layoffs and hiring trends',
      impact: '10,000+ active users',
    },
    {
      title: 'More Concepts & Ideas',
      slug: 'more',
      description: 'Additional features and improvements across the platform',
      impact: 'Enhanced user experience',
    },
  ];

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
                Enterprise B2B SaaS • 2020-2024
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-display font-black mb-8 gradient-text"
            >
              ZOOMINFO
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-light mb-12 max-w-4xl leading-relaxed"
            >
              Designing enterprise-level features for ZoomInfo's B2B intelligence platform, serving thousands of sales professionals and recruiters.
            </motion.p>

            {/* Hero Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-display font-black text-light/10">Z</span>
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
              <p className="text-xl text-light">Senior UX Designer</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-mono tracking-wider text-light/50 mb-3 uppercase">Timeline</h3>
              <p className="text-xl text-light">2020 - 2024</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-mono tracking-wider text-light/50 mb-3 uppercase">Team</h3>
              <p className="text-xl text-light">Product, Engineering, Research</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
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
              className="text-4xl md:text-5xl font-display font-bold mb-8"
            >
              The Challenge
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 leading-relaxed mb-6"
            >
              ZoomInfo needed to modernize its platform to better serve recruiters and sales professionals. The existing tools were fragmented, difficult to use, and didn't leverage modern AI capabilities.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 leading-relaxed"
            >
              My goal was to design intuitive, powerful features that would help users work more efficiently while maintaining the complexity required for enterprise-level needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sub-Projects Section */}
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

            <div className="grid md:grid-cols-3 gap-8">
              {subProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link href={`/projects/zoominfo/${project.slug}`}>
                    <motion.div
                      className="card h-full group cursor-pointer"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-display font-bold mb-4 text-primary group-hover:text-primary/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-light/70 mb-6">
                        {project.description}
                      </p>
                      <div className="text-sm font-mono text-primary/60">
                        Impact: {project.impact}
                      </div>
                      <div className="flex items-center gap-2 text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-mono tracking-wider">VIEW DETAILS</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </Link>
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

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { metric: '40%', label: 'Increase in recruiter efficiency' },
                { metric: '10,000+', label: 'Active users on new features' },
                { metric: '5+', label: 'Product teams using design system' },
                { metric: '60%', label: 'Reduction in support tickets' },
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
              Want to see more details?
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
                  Get In Touch
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
