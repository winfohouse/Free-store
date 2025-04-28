
// app/contact/page.tsx

import React from "react";

export const metadata = {
  title: "Contact Us | Onemarke",
  description: "Get in touch with Onemarke for any inquiries or support.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="mb-8">
        We'd love to hear from you! Whether you have a question, feedback, or a business inquiry, please reach out to us using the form below or email us directly.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-sm text-gray-600">
        Or email us directly at{" "}
        <a href="mailto:contact@onemarke.com" className="text-blue-600 underline">
          contact@onemarke.com
        </a>
      </div>
    </main>
  );
}
