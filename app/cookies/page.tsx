// app/cookies/page.tsx
export const metadata = {
  title: "Cookie Policy | Onemarke",
  description: "Learn how Onemarke uses cookies to enhance your browsing experience.",
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>

      <section className="mb-8 text-gray-700 space-y-4">
        <p>
          This Cookie Policy explains how <strong>Onemarke</strong> ("we", "us", and "our") uses cookies and similar technologies when you visit our website at <a href="https://onemarke.vercel.app" className="text-blue-600 underline">https://onemarke.vercel.app</a>.
        </p>

        <p>
          Cookies are small text files that are stored on your device when you visit a website. They help us improve your browsing experience by remembering your preferences and understanding how you use our site.
        </p>
      </section>

      <section className="mb-8 text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>To recognize you when you return to our website</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>To deliver personalized content and recommendations</li>
          <li>To improve the functionality and security of our website</li>
        </ul>
      </section>

      <section className="mb-8 text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Essential Cookies:</strong> Necessary for the operation of our website.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver advertisements that are relevant to you.</li>
        </ul>
      </section>

      <section className="mb-8 text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
        <p>
          You can choose to accept or reject cookies through your browser settings. Please note that disabling cookies may impact your experience on our site.
        </p>
      </section>

      <section className="text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
        <p>Last updated: April 2025</p>
      </section>
    </main>
  );
}
