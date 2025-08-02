"use client";

import Image from 'next/image';
import { useState } from 'react';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl dark:hover:shadow-gray-700 transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-white">₹{product.price}</span>
          <button
            onClick={() => {
              setShowForm(true);
            }}
            className="bg-gray-800 dark:bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors flex items-center gap-3 text-sm font-medium"
          >
            <span>Order Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {showForm && (
          <ContactForm
            productName={product.name}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </motion.div>
  );
}
      </div>
    </motion.div>
  );
}
