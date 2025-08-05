"use client"

import { Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface WhatsAppButtonProps {
  position?: 'fixed' | 'floating';
  className?: string;
}

export default function WhatsAppButton({ 
  position = 'floating', 
  className = '' 
}: WhatsAppButtonProps) {
  const [isHovering, setIsHovering] = useState(false);
  const whatsappNumber = '+917777777777'; // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const formattedNumber = whatsappNumber.replace(/^\+91/, '91'); // Remove +91 prefix for display

  return (
    <div 
      className={`${position === 'fixed' ? 'fixed' : 'absolute'} bottom-8 right-12 z-50 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center justify-center">
          <Phone className="w-6 h-6" />
        </div>

        {/* Tooltip on top */}
        {isHovering && (
          <div className="absolute bottom-full left-1/6 transform -translate-x-1/2 mb-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 px-4 text-sm text-gray-800 shadow-lg whitespace-nowrap">
              <span className="font-medium">WhatsApp: </span>
              <span className="text-green-600">{formattedNumber}</span>
            </div>
            {/* Tooltip arrow pointing down */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white/90 rotate-45"></div>
          </div>
        )}
      </Link>
    </div>
  );
}