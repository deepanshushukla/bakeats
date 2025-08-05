"use client"

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MediaCorner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/product2.jpg',
      title: 'Baking Process',
      description: 'Our artisanal baking process ensures every product is made with love and care'
    },
    {
      image: '/product2.jpg',
      title: 'Fresh Ingredients',
      description: 'We use only the finest, locally sourced ingredients in all our products'
    },
    {
      image: '/product2.jpg',
      title: 'Quality Control',
      description: 'Each product goes through rigorous quality checks to ensure excellence'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative mb-24 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Media Corner</h2>
        <p className="text-gray-600">Explore our baking journey and behind-the-scenes moments</p>
      </div>
      
      <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg group">
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Overlay Content - Always visible but more prominent on hover */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8 transition-all duration-300 group-hover:bg-black/40">
          <div className="text-white max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">{slides[currentSlide].title}</h3>
            <p className="text-lg">{slides[currentSlide].description}</p>
          </div>
        </div>
        
        {/* Navigation Buttons - Always visible but more prominent on hover */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full hover:bg-white transition-all shadow-md opacity-80 hover:opacity-100 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full hover:bg-white transition-all shadow-md opacity-80 hover:opacity-100 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCorner;