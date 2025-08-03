import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 py-16">

        <section className="mb-24">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">
                    123 Bakery Street<br />
                    Baking City, BC 12345
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Social Links</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://twitter.com/bakeats"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 flex items-center gap-2"
                    >
                      <FaTwitter className="w-5 h-5" />
                      Twitter
                    </a>
                    <a 
                      href="https://linkedin.com/company/bakeats"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 flex items-center gap-2"
                    >
                      <FaLinkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Place Your Order</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
