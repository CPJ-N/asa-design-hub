'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ModernNav } from '../../components/ModernNav';
import { ModernFooter } from '../../components/ModernFooter';

export default function HypeXPage() {
  return (
    <main className="min-h-screen bg-secondary">
      <ModernNav />
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

      <section className="pb-20">
        <div className="container max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-8">
              <span className="text-primary font-mono text-sm tracking-wider uppercase">Social Platform • 2023</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-display font-black mb-8 gradient-text">HYPEX</h1>

            <p className="text-2xl md:text-3xl text-light mb-12 max-w-4xl leading-relaxed">
              Designed social media platform focused on authentic connections and meaningful interactions between users.
            </p>

            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/20 to-teal-500/20 mb-20">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-display font-black text-light/10">HX</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="card text-center">
                <div className="text-5xl font-display font-black text-primary mb-3">Coming</div>
                <p className="text-light/70">Soon</p>
              </div>
              <div className="card text-center">
                <div className="text-5xl font-display font-black text-primary mb-3">More</div>
                <p className="text-light/70">Details</p>
              </div>
              <div className="card text-center">
                <div className="text-5xl font-display font-black text-primary mb-3">Case</div>
                <p className="text-light/70">Study</p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/contact">
                <motion.button className="btn btn-primary text-lg px-8 py-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Contact for Details
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <ModernFooter />
    </main>
  );
}
