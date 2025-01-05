'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NotificationProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

export function Notification({ title, description, icon, isVisible, onClose }: NotificationProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed top-4 right-4 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {icon}
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {title}
                </p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={onClose}
                  className="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <span className="sr-only">Close</span>
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

