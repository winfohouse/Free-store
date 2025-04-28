
// app/terms/page.tsx

import React from "react";

export const metadata = {
  title: "Terms of Service | Onemarke",
  description: "Read the terms and conditions for using Onemarke.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-8 text-gray-700">
        These Terms of Service ("Terms") govern your use of the Onemarke website and services. By accessing or using our website, you agree to be bound by these Terms.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Use of Our Website</h2>
        <p className="text-gray-700">
          You agree to use our website only for lawful purposes and in accordance with these Terms. You must not misuse the website by introducing viruses, trojans, or other malicious material.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property</h2>
        <p className="text-gray-700">
          All content on Onemarke, including text, graphics, logos, and images, is the property of Onemarke or its content suppliers and is protected by intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Affiliate Disclosure</h2>
        <p className="text-gray-700">
          Some links on our website may be affiliate links, meaning we may earn a commission if you click and make a purchase at no additional cost to you. This helps support our work.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
        <p className="text-gray-700">
          The information on Onemarke is provided "as is" without warranties of any kind. We do not guarantee the accuracy, reliability, or completeness of any information provided.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="text-gray-700">
          In no event shall Onemarke be liable for any damages arising out of the use or inability to use the website or its content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
        <p className="text-gray-700">
          We may update these Terms from time to time. We encourage users to check this page frequently for any changes. Your continued use of the site after any changes constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:contact@onemarke.com" className="text-blue-600 underline">
            contact@onemarke.com
          </a>.
        </p>
      </section>
    </main>
  );
}
