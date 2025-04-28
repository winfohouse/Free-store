
// app/about/page.tsx

import React from "react";

export const metadata = {
  title: "About Us | Onemarke",
  description: "Learn more about Onemarke's mission, vision, and team.",
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <section className="mb-8">
        <p className="text-gray-700 mb-4">
          Welcome to <strong>Onemarke</strong> — your trusted source for finding the best deals, products, and solutions online. We are committed to simplifying your shopping journey by bringing together top brands, latest offers, and reliable information in one place.
        </p>

        <p className="text-gray-700 mb-4">
          Founded with a passion for innovation and transparency, Onemarke is designed to serve smart shoppers who demand the best value without the hassle. We partner with leading retailers and trusted brands to ensure that you have access to quality products at competitive prices.
        </p>

        <p className="text-gray-700">
          Our mission is simple: <strong>help you make smarter buying decisions</strong> by providing accurate information, honest recommendations, and seamless user experiences.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          To become the most trusted online marketplace guide — empowering millions of users worldwide to shop confidently, save money, and discover the best products effortlessly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Why Choose Onemarke?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Curated product selections from top brands</li>
          <li>Up-to-date deals and promotions</li>
          <li>Honest affiliate disclosures</li>
          <li>Fast and mobile-friendly experience</li>
          <li>Passionate team focused on user-first solutions</li>
        </ul>
      </section>
    </main>
  );
}
