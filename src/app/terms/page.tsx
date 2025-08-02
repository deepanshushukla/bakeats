"use client";

import Image from 'next/image';

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          <p className="text-sm text-gray-500 mb-8">Last updated: August 2, 2025</p>

          <div className="space-y-8">
            {[
              { title: "Introduction", content: "Welcome to Bakeats! These terms and conditions outline the rules and regulations for the use of our website." },
              { title: "Acceptance of Terms", content: "By accessing this website, we assume you accept these terms and conditions. Do not continue to use Bakeats if you do not agree to take all of the terms and conditions stated on this page." },
              { title: "Privacy Policy", content: "Please read our Privacy Policy." },
              { title: "Intellectual Property Rights", content: "Unless otherwise stated, Bakeats and/or its licensors own the intellectual property rights for all material on Bakeats. All intellectual property rights are reserved." },
              { title: "User Obligations", content: "You must not:", items: [
                "Use our website in any way that is unlawful, illegal, fraudulent or harmful",
                "Use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software",
                "Conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent"
              ] },
              { title: "Limitation of Liability", content: "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website." },
              { title: "Indemnity", content: "You hereby indemnify to the fullest extent Bakeats from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms." },
              { title: "Variation of Terms", content: "Bakeats is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review such terms on a regular basis to ensure you understand all terms which bind you." },
              { title: "Severability", content: "If any provision of these terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein." },
              { title: "Governing Law", content: "These terms and conditions shall be governed by and construed in accordance with the laws of India." },
              { title: "Contact Us", content: "If you have any questions about these Terms & Conditions, please contact us through our contact page." }
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
