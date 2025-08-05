"use client"

import { Phone, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface WhatsAppLinkProps {
  text: string;
  className?: string;
}

export default function WhatsAppLink({ text, className = '' }: WhatsAppLinkProps) {
  const whatsappNumber = '+917777777777'; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      className={`inline-flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors ${className}`}
      aria-label="Chat with us on WhatsApp"
    >
      <motion.span
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        {text}
      </motion.span>
      <motion.div
        whileHover={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.2 }
        }}
        className="-translate-x-0 transition-all"
      >
        <PhoneIcon className="w-5 h-5" />
      </motion.div>
    </Link>
  );
}
