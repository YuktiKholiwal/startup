'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Heart, Clock } from 'lucide-react';

const ValueProp = ({ 
  title, 
  description, 
  icon: Icon,
  imageUrl,
  index 
}: { 
  title: string; 
  description: string; 
  icon: any;
  imageUrl: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="flex flex-col md:flex-row items-center gap-8 max-w-2xl mx-auto"
    >
      <div className="text-center md:text-left md:w-1/2">
        <div className="mb-4">
          <Icon className="w-10 h-10 text-pink-500 mx-auto md:mx-0" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="md:w-1/2">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-pink-200 dark:border-pink-900">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ValuePropSection() {
  const valueProps = [
    {
      title: "Clarity in your Schedules",
      description: "Complete visibility allows you to manage your time and find more space for each other.",
      icon: Calendar,
      imageUrl: "/placeholder.svg?height=400&width=400"
    },
    {
      title: "Greater Alignment",
      description: "No missed appointments, missed expectations or missed opportunities over time or tasks.",
      icon: Heart,
      imageUrl: "/placeholder.svg?height=400&width=400"
    },
    {
      title: "Better time Together",
      description: "Life's admin taken care of so you can spend more time focusing on what matters most, each other.",
      icon: Clock,
      imageUrl: "/placeholder.svg?height=400&width=400"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
        >
          With our app, you'll experience...
        </motion.h2>
        <div className="space-y-24">
          {valueProps.map((prop, index) => (
            <ValueProp key={prop.title} {...prop} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

