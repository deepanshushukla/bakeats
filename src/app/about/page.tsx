import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bakeats</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the passion, craftsmanship, and people behind our premium baked goods
          </p>
        </section>

        {/* Our Story Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Bakeats was born out of a passion for creating premium rusks and biscuits that bring joy to people&apos;s lives.
                What began as a small home kitchen experiment has grown into a beloved brand known for its quality and taste.
              </p>
              <p className="text-lg">
                From our humble beginnings to our current state-of-the-art bakery, we&apos;ve stayed true to our roots,
                maintaining traditional methods while embracing innovation to deliver the best products to our customers.
              </p>
            </div>
            <div className="relative h-[400px] order-1 md:order-2">
              <Image
                src="/about-image.jpg"
                alt="Bakeats bakery"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="mb-24 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/founder.jpg"
                alt="Sarah Johnson, Founder of Bakeats"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Our Founder</h2>
              <h3 className="text-2xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">Pastry Chef & Baking Enthusiast</p>
              <p className="text-lg mb-4">
                With over 15 years of experience in the baking industry, Sarah founded Bakeats in 2015 with a simple mission:
                to create exceptional baked goods using time-honored techniques and premium ingredients.
              </p>
              <p className="text-lg mb-4">
                &quot;I believe baking is an act of love. Every product we make carries that same care and attention I put into
                my first batches years ago,&quot; says Sarah.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Quality First</h3>
              <p className="text-gray-600 text-center">
                We never compromise on quality. Only the finest ingredients make it into our products, sourced from trusted suppliers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Artisanal Craftsmanship</h3>
              <p className="text-gray-600 text-center">
                Each product is handcrafted with care and attention to detail, combining traditional techniques with modern innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Customer Satisfaction</h3>
              <p className="text-gray-600 text-center">
                Your happiness drives us. We listen to feedback and continuously improve to exceed your expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section (Optional) */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Baking Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Michael Chen", role: "Head Baker", image: "/team1.jpg" },
              { name: "Emma Rodriguez", role: "Pastry Chef", image: "/team2.jpg" },
              { name: "David Wilson", role: "Quality Control", image: "/team3.jpg" },
              { name: "Sophia Kim", role: "Product Development", image: "/team4.jpg" },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}