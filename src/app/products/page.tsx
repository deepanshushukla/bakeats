"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Gud Rusk",
    description: "Traditional jaggery rusks with a perfect crunch. Perfect for tea time or as a healthy snack.",
    price: 249,
    image: "/product2.jpg",
    tags: ["Traditional", "Jaggery", "Crunchy"]
  },
  {
    id: 2,
    name: "Elaichi Rusk",
    description: "Cardamom-infused rusks with a fragrant aroma. Ideal for those who love a hint of spice.",
    price: 299,
    image: "/product2.jpg",
    tags: ["Cardamom", "Spicy", "Fragrant"]
  },
  {
    id: 3,
    name: "Coconut Biscuit",
    description: "Delicious coconut-flavored biscuits with a crispy texture. Perfect for breakfast or snacks.",
    price: 199,
    image: "/product2.jpg",
    tags: ["Coconut", "Crispy", "Breakfast"]
  },
  {
    id: 4,
    name: "Butter Rusks",
    description: "Classic butter rusks with a rich, buttery flavor. A timeless favorite.",
    price: 229,
    image: "/product2.jpg",
    tags: ["Buttery", "Classic", "Rich"]
  },
  {
    id: 5,
    name: "Almond Rusks",
    description: "Premium rusks with crunchy almonds. Perfect for nut lovers.",
    price: 349,
    image: "/product2.jpg",
    tags: ["Almond", "Premium", "Nutty"]
  },
  {
    id: 6,
    name: "Vanilla Rusks",
    description: "Delicate vanilla-flavored rusks. A subtle and elegant choice.",
    price: 279,
    image: "/product2.jpg",
    tags: ["Vanilla", "Elegant", "Subtle"]
  }
];

export default function Products() {
  return (
    <div className="min-h-screen text-white">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16 relative overflow-hidden"
        >
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">Our Products</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
              Discover our premium selection of rusks and biscuits made with love and care
            </p>
          </div>
        </motion.div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={index === 0 ? {} : { opacity: 0, y: '100%' }}
              whileInView={index === 0 ? {} : { opacity: 1, y: 0 }}
              transition={index === 0 ? {} : { duration: 0.8, ease: 'easeOut' }}
              className="relative w-full h-[600px] overflow-hidden"
            >
              <div className="absolute inset-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent h-1/3 flex flex-col justify-end p-8">
                <h3 className="text-4xl font-bold text-white mb-4">{product.name}</h3>
                <p className="text-xl font-medium text-gray-300 mb-8 leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-700 text-gray-200 text-base rounded-full hover:bg-gray-600 transition-colors font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-4xl font-bold text-white">₹{product.price}</span>
                  <Link
                    href="/contact"
                  className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-medium text-base flex items-center gap-1 inline-block md:px-8 md:py-4 md:text-lg md:gap-2 md:rounded-xl"
                >
                Order Now
            </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
