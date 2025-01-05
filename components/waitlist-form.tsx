'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from 'lucide-react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  // Replace this URL with your Formspree endpoint
  const FORM_ACTION_URL = 'https://formspree.io/f/xlddpgrg';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsError(false); // Reset error state before submission

    try {
      const response = await fetch(FORM_ACTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsError(true);
    }
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-xl mx-auto bg-gray-900 rounded-2xl p-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 text-white">
            Be Part of Something Special
          </h2>
          <p className="text-xl text-gray-400">
            Join our waitlist and be the first to experience a new way of staying connected.
          </p>
        </motion.div>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-pink-500 text-white p-4 rounded-lg text-center"
          >
            Thank you for joining our waitlist!
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-800/50 text-white border-gray-700 h-12 text-lg rounded-lg"
            />
            <Button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-lg py-6 text-lg flex items-center justify-center gap-2"
            >
              Join the Waitlist
              <Sparkles className="w-5 h-5" />
            </Button>
            {isError && (
              <p className="text-center text-red-500 text-sm mt-4">
                Something went wrong. Please try again later.
              </p>
            )}
            <p className="text-center text-gray-400 text-sm mt-4">
              No spam, just updates about Love.AI and early access information.
            </p>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
