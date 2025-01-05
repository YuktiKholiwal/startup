'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  notificationTitle: string;
  notificationDescription: string;
}

const FeatureSection: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  gradient,
  notificationTitle,
  notificationDescription,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="p-6 bg-gray-900 rounded-lg shadow-lg h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${gradient} text-transparent bg-clip-text text-center`}>
          {title}
        </h2>
        <p className="text-lg text-gray-300 text-center">{description}</p>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 right-0 mb-2 bg-gray-800 rounded-lg p-4 shadow-lg z-10"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">{icon}</div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-100">{notificationTitle}</p>
                <p className="mt-1 text-sm text-gray-300">{notificationDescription}</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button 
                  className="bg-gray-800 rounded-md inline-flex text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsHovered(false);
                  }}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeatureSection;

