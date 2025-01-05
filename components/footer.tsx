import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">
          © 2024 Love.AI. All rights reserved.
        </p>
        <a
          href="https://linkedin.com/company/love-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}

