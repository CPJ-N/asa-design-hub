'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ModernNav } from '../components/ModernNav';
import { ModernFooter } from '../components/ModernFooter';

const projects = [
  {
    id: 1,
    title: 'ZoomInfo',
    slug: 'zoominfo',
    category: 'Enterprise B2B SaaS',
    year: '2020-2024',
    description: 'Designed enterprise-level features including Job Description Parser and Layoffs Tracker, serving thousands of recruiters and sales professionals.',
    tags: ['UX Design', 'Enterprise', 'Data Visualization', 'B2B'],
    color: 'from-blue-500/20 to-purple-500/20',
    featured: true,
  },
  {
    id: 2,
    title: 'Johnson & Johnson',
    slug: 'jnj',
    category: 'Healthcare Platform',
    year: '2018-2020',
    description: 'Redesigned patient portal and healthcare platform solutions for medical professionals, improving engagement and accessibility.',
    tags: ['Healthcare', 'Accessibility', 'Patient Experience', 'UX/UI'],
    color: 'from-red-500/20 to-pink-500/20',
    featured: true,
  },
  {
    id: 3,
    title: 'HypeX',
    slug: 'hypex',
    category: 'Social Platform',
    year: '2023',
    description: 'Designed social media platform focused on authentic connections and meaningful interactions between users.',
    tags: ['Social Media', 'Mobile Design', 'User Engagement'],
    color: 'from-green-500/20 to-teal-500/20',
    featured: true,
  },
  {
    id: 4,
    title: 'Afiye',
    slug: 'afiye',
    category: 'Wellness App',
    year: '2023',
    description: 'Created comprehensive wellness application helping users track their mental and physical health journey.',
    tags: ['Wellness', 'Mobile App', 'Health Tech', 'iOS/Android'],
    color: 'from-yellow-500/20 to-orange-500/20',
    featured: true,
  },
];

export default function ProjectsPage() {
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
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="max-w-4xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-9xl font-display font-black mb-6 gradient-text"
            >
              PROJECTS
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-light/80 leading-relaxed"
            >
              A collection of my work spanning enterprise software, healthcare, social platforms, and wellness applications. Each project represents a unique challenge solved through user-centered design.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured Work
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  custom={index}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <motion.article
                      className="group relative h-full"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Project Card */}
                      <div className="card h-full flex flex-col">
                        {/* Image Placeholder */}
                        <div className={`relative aspect-video rounded-lg overflow-hidden mb-6 bg-gradient-to-br ${project.color}`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-8xl font-display font-black text-light/10 group-hover:text-light/20 transition-colors">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-3xl font-display font-bold text-primary group-hover:text-primary/80 transition-colors mb-2">
                                {project.title}
                              </h3>
                              <p className="text-light/60 font-mono text-sm">
                                {project.category} • {project.year}
                              </p>
                            </div>
                          </div>

                          <p className="text-light/70 mb-6 flex-1">
                            {project.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 text-xs font-mono bg-light/5 text-light/60 rounded-full border border-light/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* View Project Link */}
                          <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                            <span className="font-mono text-sm tracking-wider">VIEW PROJECT</span>
                            <motion.svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </motion.svg>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-t border-light/10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-display font-bold mb-12 text-center"
            >
              My Design Process
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Research',
                  description: 'Understanding users, business goals, and market landscape',
                },
                {
                  step: '02',
                  title: 'Ideate',
                  description: 'Brainstorming solutions and exploring multiple directions',
                },
                {
                  step: '03',
                  title: 'Design',
                  description: 'Creating high-fidelity designs and interactive prototypes',
                },
                {
                  step: '04',
                  title: 'Test & Iterate',
                  description: 'Gathering feedback and continuously improving',
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  variants={itemVariants}
                  custom={index}
                  className="text-center"
                >
                  <div className="text-6xl font-display font-black text-primary/20 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">{phase.title}</h3>
                  <p className="text-light/60 text-sm">{phase.description}</p>
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
              Interested in my work?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-light/70 mb-8"
            >
              Let's discuss how I can help bring your next project to life.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <motion.button
                  className="btn btn-primary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
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
