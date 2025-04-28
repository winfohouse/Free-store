// pages/affiliate-disclosure.tsx
import Link from 'next/link';

const AffiliateDisclosure = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Affiliate Disclosure</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="mt-2">
            At Onemarke, we believe in full transparency. In compliance with the Federal Trade Commission (FTC) guidelines, we want you to know that certain links on our site are affiliate links.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">2. What Are Affiliate Links?</h2>
          <p className="mt-2">
            Affiliate links are special links that allow us to earn a small commission if you click and purchase products through them. This does not add any additional cost to you — it simply helps us maintain and improve our site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">3. Why Affiliate Links?</h2>
          <p className="mt-2">
            Running Onemarke involves costs including hosting, content creation, development, and maintenance. Affiliate partnerships help support these efforts so we can continue offering you the best shopping deals and recommendations without charging you a fee.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">4. Our Promise to You</h2>
          <ul className="list-disc pl-5 mt-2">
            <li>We only recommend products and services that we truly believe in.</li>
            <li>Affiliate partnerships do <strong>not</strong> influence the content, topics, or posts we make.</li>
            <li>Your trust is important to us, and we are committed to maintaining transparency.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">5. Partners and Programs</h2>
          <p className="mt-2">
            Onemarke participates in various affiliate marketing programs, which means we may earn commissions from <strong>Walmart, eBay,</strong> and other merchant partners through links on our site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">6. Your Choice</h2>
          <p className="mt-2">
            Clicking on affiliate links is completely optional. You are free to choose whether or not to use our links to make your purchases.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold">7. Contact Us</h2>
          <p className="mt-2">
            If you have any questions regarding our affiliate relationships or anything else, please feel free to reach out to us at{' '}
            <a href="mailto:contact@onemarke.com" className="text-blue-500">contact@onemarke.com</a>.
          </p>
        </section>

      </div>
    </div>
  );
};

export default AffiliateDisclosure;
