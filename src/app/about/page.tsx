import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <section className="mb-24">
          <h1 className="text-4xl font-bold text-center mb-12">About Bakeats</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Bakeats was born out of a passion for creating premium rusks and biscuits that bring joy to people&rsquo;s lives.
                Our founder, [Founder&rsquo;s Name], started this journey with a simple goal - to create the best baked goods using
                only the finest ingredients and traditional methods.
              </p>
              <p className="text-lg">
                Today, Bakeats is known for its exceptional quality and commitment to excellence. We take pride in our
                artisanal approach and attention to detail in every product we create.
              </p>
            </div>

            <div className="relative h-[400px]">
              <Image
                src="/about-image.jpg"
                alt="Bakeats founder"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
          
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Only the finest ingredients make it into our products.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Artisanal Craftsmanship</h3>
              <p className="text-gray-600">
                Each product is crafted with care and attention to detail, just like it was made for you.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Your happiness is our priority. We go above and beyond to ensure you have the best experience.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
