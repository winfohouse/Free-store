
// app/privacy/page.tsx

import React from "react";

export const metadata = {
  title: "Privacy Policy | Onemarke",
  description: "Learn how Onemarke collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-6">
        Welcome to Onemarke. We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Personal Identification Information: Name, email address, phone number, etc.</li>
        <li>Non-Personal Identification Information: Browser type, device information, pages you visit, time spent on our site, etc.</li>
        <li>Cookies and Tracking Data: To improve your browsing experience.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Provide, operate, and maintain our website</li>
        <li>Improve, personalize, and expand our website</li>
        <li>Understand and analyze how you use our website</li>
        <li>Communicate with you, either directly or through one of our partners</li>
        <li>Send you updates and promotional materials</li>
        <li>Prevent fraud and ensure site security</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
      <p className="mb-6">
        Onemarke uses cookies to enhance your experience. Cookies are small files stored on your device to help the website recognize your browser and remember certain information.
        You can control or disable cookies through your browser settings. However, disabling cookies may affect your ability to use some parts of our site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Third-Party Services and Affiliate Links</h2>
      <p className="mb-6">
        We may use third-party services (such as analytics tools) that collect information to help us understand our audience better.
        Some links on our site are affiliate links, and we may earn commissions from purchases made through these links.
        We are not responsible for the privacy practices of third-party websites linked on our site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Data Protection</h2>
      <p className="mb-6">
        We implement a variety of security measures to maintain the safety of your personal information, including secure data storage,
        limited access to your data, and regular monitoring of systems for vulnerabilities.
        However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
      <p className="mb-6">
        Depending on your location, you may have the following rights:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>Access the information we hold about you</li>
        <li>Request correction or deletion of your data</li>
        <li>Object to or restrict our processing of your data</li>
        <li>Withdraw consent at any time</li>
      </ul>
      <p className="mb-6">
        To exercise these rights, please contact us at{" "}
        <a href="mailto:contact@onemarke.com" className="text-blue-600 underline">
          contact@onemarke.com
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
      <p className="mb-6">
        Our website is not intended for children under the age of 13. We do not knowingly collect or solicit personal information from anyone under the age of 13.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
        We encourage you to review this policy periodically.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-6">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Email:{" "}
          <a href="mailto:contact@onemarke.com" className="text-blue-600 underline">
            contact@onemarke.com
          </a>
        </li>
      </ul>

      <p className="text-sm text-gray-500 mt-10">Last Updated: April 27, 2025</p>
    </main>
  );
}
