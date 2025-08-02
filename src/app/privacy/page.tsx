"use client";

import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Image
              src="/bakeats-logo.png"
              alt="Bakeats Logo"
              width={100}
              height={100}
              className="object-contain mr-4"
            />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-sm text-gray-500 mb-8">Last updated: August 2, 2025</p>

          <div className="space-y-8">
            {[
              { title: "Introduction", content: "Bakeats is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website." },
              { title: "Information We Collect", content: "We may collect the following types of information:", items: [
                "Personal Information (name, email address, phone number) when you contact us or place an order",
                "Order Information (product details, shipping address, payment information) when you make a purchase",
                "Usage Data (browser type, IP address, pages visited) through cookies and similar technologies"
              ] },
              { title: "How We Use Your Information", content: "We use your information to:", items: [
                "Process and fulfill your orders",
                "Respond to your inquiries and provide customer support",
                "Improve our website and services",
                "Send you updates about our products and services (with your consent)"
              ] },
              { title: "Information Sharing", content: "We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information with:", items: [
                "Service providers who assist us in operating our website (e.g., payment processors, shipping companies)",
                "Legal authorities when required by law"
              ] },
              { title: "Cookies", content: "We use cookies to enhance your experience on our website. You can control cookies through your browser settings." },
              { title: "Security", content: "We implement security measures to protect your personal information, including:", items: [
                "Secure Socket Layer (SSL) technology for data encryption",
                "Regular security updates and monitoring",
                "Access controls for our employees"
              ] },
              { title: "Your Rights", content: "You have the right to:", items: [
                "Access your personal information",
                "Correct any inaccuracies in your information",
                "Request deletion of your information",
                "Opt-out of marketing communications"
              ] },
              { title: "Children's Privacy", content: "Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children." },
              { title: "Changes to This Privacy Policy", content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page." },
              { title: "Contact Us", content: "If you have any questions about this Privacy Policy, please contact us through our contact page." }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-orange-600 pl-3 bg-orange-50">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {section.items.map((item, i) => (
                      <li key={i} className="pl-2">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
