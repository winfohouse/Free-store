
// app/disclaimer/page.tsx

import React from "react";

export const metadata = {
  title: "Disclaimer | Onemarke",
  description: "Important disclaimer information for Onemarke visitors.",
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">Disclaimer</h1>

      <section className="mb-8">
        <p className="text-gray-700">
          The information provided by Onemarke (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) on this website is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">External Links Disclaimer</h2>
        <p className="text-gray-700">
          The website may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Affiliate Disclaimer</h2>
        <p className="text-gray-700">
          Some of the links on this website may be &quot;affiliate links.&quot; This means if you click on the link and purchase an item, we may receive an affiliate commission at no additional cost to you.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Professional Disclaimer</h2>
        <p className="text-gray-700">
          The site cannot and does not contain financial or legal advice. The financial and legal information is provided for general informational and educational purposes only and is not a substitute for professional advice.
        </p>
      </section>
    </main>
  );
}
