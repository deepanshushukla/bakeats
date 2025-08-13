"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bakeats_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative text-white text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          <span className="block">Crafted with Love,</span>
          <span className="block">Delivered with Care</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Discover our premium selection of rusks and biscuits
        </p>
        <Link
          href="/contact"
          className="bg-gray-700 text-white px-8 py-4 rounded-xl hover:bg-gray-600 transition-colors font-semibold text-lg flex items-center gap-2 max-w-md mx-auto inline-block"
          >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
