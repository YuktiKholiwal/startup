'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Coffee, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 text-pink-500 mx-auto" />
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          When Everything Else Demands Your Time, Love Gets Left Behind
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Life is busy, but love doesn&apos;t have to be.
          AI ensures you never miss a thoughtful moment.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <Button
            onClick={scrollToWaitlist}
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-lg px-8 py-6 text-lg"
          >
            Join the Waitlist
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

