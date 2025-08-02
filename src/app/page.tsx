import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import Products from '@/app/products/page';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-24">
          <Products />
        </section>
        
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-8">Order Now</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
