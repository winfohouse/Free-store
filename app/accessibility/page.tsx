// app/accessibility/page.tsx
export default function AccessibilityPage() {
  return (
    <div className="max-w-3xl mx-auto p-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Website Accessibility</h1>
      <p className="text-lg">
        Onemarke is committed to ensuring that our website is accessible to all users, including individuals with disabilities.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Accessibility Features</h2>
        <ul className="list-disc pl-5 mt-4">
          <li>Keyboard Navigation: Full access to the site without a mouse.</li>
          <li>Screen Reader Support: All images include descriptive alt text.</li>
          <li>Text Resizing: Increase or decrease text size through browser settings.</li>
          <li>Color Contrast: High-contrast color options for users with visual impairments.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Feedback</h2>
        <p className="mt-4">We are continuously working to improve the accessibility of our website. If you encounter any issues or have suggestions, please let us know.</p>
        <p className="mt-2">You can contact us via our <a href="/contact" className="text-blue-600 underline">Contact Page</a>.</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Compliance</h2>
        <p className="mt-4">
          We aim to comply with all relevant accessibility guidelines and standards, including WCAG 2.1 and ADA requirements.
        </p>
      </section>
    </div>
  );
}
