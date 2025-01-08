'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Calendar, Heart, SmilePlus, Bell, Coffee, Star } from 'lucide-react';
import { Notification } from './ui/notification';

const features = [
  {
    icon: Heart,
    title: "AI-Powered Insights",
    description: "Our AI analyzes your mood and calendar to send thoughtful suggestions in real time",
    notification: {
      title: "Love Reminder",
      description: "Alex had a busy day today with back-to-back meetings. Why not surprise him with his favorite takeout dinner?",
      icon: <Heart className="h-6 w-6 text-pink-500" />
    }
  },
  {
    icon: Calendar,
    title: "Calendar Sync",
    description: "Seamlessly integrates with both partners' schedules for perfect timing",
    notification: {
      title: "Date Night Opportunity",
      description: "You both have free time this Friday evening. How about planning a date night?",
      icon: <Star className="h-6 w-6 text-blue-500" />
    }
  },
  {
    icon: SmilePlus,
    title: "Mood Tracking",
    description: "Keep track of emotional states to better understand and support each other",
    notification: {
      title: "Mood Alert",
      description: "Lily seems stressed today. Consider sending a supportive message or bringing home her favorite ice cream.",
      icon: <SmilePlus className="h-6 w-6 text-yellow-500" />
    }
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get gentle reminders for thoughtful gestures at just the right moment",
    notification: {
      title: "Message Break",
      description: "Sam had a big presentation just now. Make sure to ask him about it!",
      icon: <Coffee className="h-6 w-6 text-purple-500" />
    }
  }
];

export default function FeaturesSection() {
  const [activeNotification, setActiveNotification] = useState<number | null>(null);
  const textRef = useRef(null);

  // Simplified use of useInView
  const isInView = useInView(textRef);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isInView) {
      let index = 0; // Start with the first notification
      setActiveNotification(index);

      timer = setInterval(() => {
        index = (index + 1) % features.length; // Cycle through notifications
        setActiveNotification(index);
      }, 2500); // Change every 2.5 seconds
    } else {
      setActiveNotification(null); // Hide notifications when section is fully out of view
      if (timer) clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer); // Cleanup on unmount
    };
  }, [isInView]);

  return (
    <section className="py-20 px-4 relative" ref={textRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          >
            Love.AI: Your relationship wingman, powered by advanced AI technology
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Love is in the details. We make sure you never miss them.
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }} // Always keep features visible
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-900 rounded-lg p-6 shadow-lg overflow-hidden relative z-10"
            >
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      {features.map((feature, index) => (
        <Notification
          key={index}
          title={feature.notification.title}
          description={feature.notification.description}
          icon={feature.notification.icon}
          isVisible={activeNotification === index}
          onClose={() => setActiveNotification(null)}
        />
      ))}
    </section>
  );
}
