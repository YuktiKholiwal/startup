'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform opacity for fade-out
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0]);

  // Slight size increase on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  return (
    <div ref={ref} className="py-16 overflow-hidden">
      <motion.div
        style={{ opacity, scale }}
        className="w-full text-center font-bold text-gray-300 text-4xl md:text-5xl lg:text-6xl leading-tight"
      >
        Small gestures of love, perfectly timed, create the strongest bonds.
      </motion.div>
    </div>
  );
}
