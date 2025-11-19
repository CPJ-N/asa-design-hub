'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'ZoomInfo',
    description: 'Enterprise UX/UI Design',
    image: '/projects/zoominfo.jpg',
    href: '/projects/zoominfo',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'Johnson & Johnson',
    description: 'Healthcare Platform Design',
    image: '/projects/jnj.png',
    href: '/projects/jnj',
    color: 'from-red-500/20 to-pink-500/20',
  },
  {
    id: 3,
    title: 'HypeX',
    description: 'Social Platform UX',
    image: '/projects/hypex.png',
    href: '/projects/hypex',
    color: 'from-green-500/20 to-teal-500/20',
  },
  {
    id: 4,
    title: 'Afiye',
    description: 'Wellness App Design',
    image: '/projects/afiye.png',
    href: '/projects/afiye',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
];

export function Projects() {
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

  const titleLineVariants = {
    hidden: { width: 40 },
    visible: {
      width: '100%',
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={sectionVariants}
        >
          {/* Section Header */}
          <div className="mb-16">
            <motion.div
              className="flex items-center gap-8 group cursor-pointer"
              whileHover="hover"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold tracking-wide">
                PROJECTS
              </h2>
              <div className="flex-1 relative h-1 overflow-hidden">
                <div className="absolute inset-0 bg-light/10" />
                <motion.div
                  variants={titleLineVariants}
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary via-primary to-transparent"
                />
                <motion.div
                  className="absolute right-0 top-0 bottom-0 w-10 bg-primary"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 1, width: 100 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                custom={index}
              >
                <Link href={project.href}>
                  <motion.div
                    className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Project Image Placeholder */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <div className="text-6xl md:text-8xl font-display font-black text-light/10 group-hover:text-light/20 transition-colors">
                        {project.title.charAt(0)}
                      </div>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <motion.h3
                        className="text-3xl md:text-4xl font-display font-bold text-primary mb-2"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-light/70 group-hover:text-light transition-colors">
                        {project.description}
                      </p>

                      {/* Arrow Icon */}
                      <motion.div
                        className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -10 }}
                        whileHover={{ x: 0 }}
                      >
                        <span className="text-sm font-mono tracking-wider">VIEW PROJECT</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors rounded-lg" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <Link href="/projects">
              <motion.button
                className="btn btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
