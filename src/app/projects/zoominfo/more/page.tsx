'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ModernNav } from '../../../components/ModernNav';
import { ModernFooter } from '../../../components/ModernFooter';

export default function MorePage() {
  return (
    <main className="min-h-screen bg-secondary">
      <ModernNav />
      <div className="container pt-32 pb-8">
        <Link href="/projects/zoominfo">
          <motion.button className="flex items-center gap-2 text-light/60 hover:text-primary transition-colors" whileHover={{ x: -5 }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to ZoomInfo
          </motion.button>
        </Link>
      </div>

      <section className="pb-20">
        <div className="container max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-6xl md:text-8xl font-display font-black mb-8 gradient-text">More Concepts & Ideas</h1>
            <p className="text-2xl text-light mb-12 max-w-4xl">
              Additional features and improvements across the ZoomInfo platform.
            </p>
            <div className="card">
              <h2 className="text-3xl font-display font-bold mb-4">Coming Soon</h2>
              <p className="text-light/70">Detailed case study in progress.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <ModernFooter />
    </main>
  );
}
