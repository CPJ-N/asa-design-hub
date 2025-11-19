'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 300 + 100,
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-secondary">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gooey blur effect for metaball merging */}
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>

          {/* Gradient definitions */}
          <radialGradient id="bubbleGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
          </radialGradient>

          <radialGradient id="bubbleGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.02" />
          </radialGradient>

          <radialGradient id="bubbleGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-light)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--color-light)" stopOpacity="0.02" />
          </radialGradient>
        </defs>

        <g filter="url(#goo)">
          {bubbles.map((bubble, index) => (
            <motion.circle
              key={bubble.id}
              cx={`${bubble.x}%`}
              cy={`${bubble.y}%`}
              r={bubble.size}
              fill={
                index % 3 === 0
                  ? 'url(#bubbleGradient1)'
                  : index % 3 === 1
                  ? 'url(#bubbleGradient2)'
                  : 'url(#bubbleGradient3)'
              }
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </g>
      </svg>

      {/* Additional floating elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background:
                i % 2 === 0
                  ? 'radial-gradient(circle, rgba(224, 241, 31, 0.08) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(240, 240, 240, 0.03) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 150 - 75, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-light) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-light) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
}
