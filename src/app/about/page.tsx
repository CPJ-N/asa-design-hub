'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ModernNav } from '../components/ModernNav';
import { ModernFooter } from '../components/ModernFooter';

export default function AboutPage() {
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

  const education = [
    {
      school: 'The New School - Parsons School of Design',
      degree: 'MS in Strategic Design & Management',
      location: 'New York, NY',
      period: '2024 - Present',
      description: 'Focusing on the intersection of design strategy, business innovation, and user experience.',
    },
    {
      school: 'Previous Education',
      degree: 'Bachelor of Design',
      location: 'Location',
      period: 'Year - Year',
      description: 'Foundation in design principles and user-centered design methodologies.',
    },
  ];

  const experience = [
    {
      company: 'ZoomInfo',
      role: 'Senior UX Designer',
      period: '2020 - 2024',
      description: 'Led design initiatives for enterprise B2B SaaS platform, focusing on data visualization and workflow optimization.',
      achievements: [
        'Designed Job Description Parser improving recruiter efficiency by 40%',
        'Created Layoffs Tracker feature serving 10,000+ active users',
        'Established design system used across 5+ product teams',
      ],
    },
    {
      company: 'Johnson & Johnson',
      role: 'UX/UI Designer',
      period: '2018 - 2020',
      description: 'Designed healthcare platform solutions for medical professionals and patients.',
      achievements: [
        'Redesigned patient portal increasing engagement by 60%',
        'Led accessibility initiatives ensuring WCAG 2.1 AA compliance',
        'Collaborated with 15+ cross-functional teams',
      ],
    },
  ];

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
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-7xl md:text-9xl font-display font-black mb-6 gradient-text">
                ABOUT
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl text-light mb-8 leading-relaxed"
            >
              My passion lies in the intersection of{' '}
              <span className="text-primary font-semibold">art and technology</span>,
              where creativity meets functionality.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-light/80 leading-relaxed"
            >
              With over 5 years of experience in UX/UI design, I specialize in creating
              meaningful digital experiences that not only look beautiful but solve real
              problems. Currently pursuing my MS in Strategic Design & Management at
              Parsons, I&apos;m constantly exploring new ways to blend design thinking with
              business strategy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
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
              EXPERTISE
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Design Strategy',
                  skills: ['User Research', 'Design Thinking', 'Product Strategy', 'Workshop Facilitation'],
                },
                {
                  title: 'UX/UI Design',
                  skills: ['Wireframing', 'Prototyping', 'Design Systems', 'Interaction Design'],
                },
                {
                  title: 'Tools & Tech',
                  skills: ['Figma', 'Adobe Creative Suite', 'HTML/CSS', 'React Basics'],
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  custom={index}
                  className="card"
                >
                  <h3 className="text-2xl font-display font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-light/70">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
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
              EDUCATION
            </motion.h2>

            <div className="space-y-8 max-w-4xl">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  variants={itemVariants}
                  custom={index}
                  className="card"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-primary mb-2">
                        {edu.school}
                      </h3>
                      <p className="text-xl text-light mb-1">{edu.degree}</p>
                      <p className="text-light/60">{edu.location}</p>
                    </div>
                    <span className="text-primary font-mono mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-light/70">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
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
              EXPERIENCE
            </motion.h2>

            <div className="space-y-8 max-w-4xl">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  variants={itemVariants}
                  custom={index}
                  className="card"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-primary mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-xl text-light mb-2">{exp.role}</p>
                    </div>
                    <span className="text-primary font-mono mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-light/70 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-3 text-light/70">
                        <span className="text-primary mt-1">→</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
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
              Let's Work Together
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-light/70 mb-8"
            >
              I&apos;m currently seeking part-time UX roles and exciting collaboration opportunities.
            </motion.p>
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
              <motion.a
                href="https://drive.google.com/file/d/1NQZGgKqecdKRg7RAV-TEtg1VdSdfuYtV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <ModernFooter />
    </main>
  );
}
