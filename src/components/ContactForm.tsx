"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schema without 'product'
const orderSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  phone: z.string()
    .min(10, 'Phone number must be 10 digits')
    .max(10, 'Phone number must be 10 digits')
    .regex(/^[0-9]+$/, 'Phone number must contain only numbers'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface ContactFormProps {
  productName?: string;
  onClose?: () => void;
}

export default function ContactForm({ productName }: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: OrderFormData) => {
    setIsLoading(true);
    setResponseMessage('');
    try {
      const payload = {
        to: 'deepanshu.shukla@toptal.com',
        subject: `Bakeats New Order: ${productName || 'General Inquiry'}`,
        text: `New Order Received:\n\nProduct: ${productName || 'N/A'}\nCustomer: ${data.name} (${data.email}, ${data.phone})\n\nMessage:\n${data.message}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f9fa;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background-color: #ff6b6b;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .logo {
      max-width: 150px;
      margin-bottom: 20px;
    }
    .content {
      padding: 20px;
    }
    .customer-info {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .message {
      background-color: #fff;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 20px;
    }
    .footer {
      text-align: center;
      padding: 20px;
      background-color: #f8f9fa;
      border-radius: 0 0 8px 8px;
    }
    .highlight {
      color: #ff6b6b;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://bakeats.vercel.app/bakeats-logo.png" alt="Bakeats Logo" class="logo">
      <h1>New Order: ${productName || 'General Inquiry'}</h1>
    </div>
    <div class="content">
      <div class="customer-info">
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
      </div>
      
      <div class="message">
        <h3>Message</h3>
        <p>${data.message}</p>
      </div>
    </div>
    
    <div class="footer">
      <p>Thank you for your inquiry! We will get back to you soon.</p>
      <p class="highlight">Bakeats - Your Premium Biscuit & Rusk Specialist</p>
    </div>
  </div>
</body>
</html>`
      };
      try {
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || 'Failed to send order');
        }

        const result = await res.json();
        console.log('Email sent successfully:', result);
        setResponseMessage('Order placed successfully! We will contact you shortly.');
        reset();
      } catch (error) {
        console.error('Error sending email:', error);
        throw error;
      }
    } catch (err) {
      console.error(err);
      setResponseMessage(err instanceof Error ? err.message : 'Error placing order');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="order" >
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="px-8 py-10">
          {/*<h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">*/}
          {/*  Place Your Order{productName ? `: ${productName}` : ''}*/}
          {/*</h2>*/}
          {responseMessage && (
            <div className="mb-6 text-center">
              <p className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800">
                {responseMessage}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                {...register('name')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="you@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
                placeholder="Your requirements"
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gray-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Placing…' : 'Place Order'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
