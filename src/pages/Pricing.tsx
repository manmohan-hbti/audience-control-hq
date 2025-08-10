import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started and testing your ideas.",
    features: [
      "Up to 1,000 subscribers",
      "Basic automations",
      "Unlimited broadcasts",
      "Starter templates",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Creator",
    price: "$29",
    period: "/month",
    description: "Everything you need to grow your audience.",
    features: [
      "Up to 10,000 subscribers",
      "Advanced automations",
      "Referral program",
      "A/B testing",
      "Priority support",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For teams and established creators.",
    features: [
      "Unlimited subscribers",
      "Full CRM features",
      "API access",
      "Revenue analytics",
      "Dedicated success manager",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const Pricing = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "InfluencersKit",
    description:
      "Email-first operating system for creators to build, grow, manage, and monetize their audience.",
    brand: { "@type": "Brand", name: "InfluencersKit" },
    offers: plans.map((p) => ({
      "@type": "Offer",
      price: p.price.replace(/[^0-9]/g, "") || "0",
      priceCurrency: "USD",
      category: p.name,
      url: "/pricing",
      availability: "https://schema.org/InStock",
    })),
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO
        title="Pricing – InfluencersKit"
        description="Simple, transparent pricing for creators. Start free, upgrade as you grow."
        path="/pricing"
        jsonLd={jsonLd}
      />

      <main className="pt-20 pb-24">
        <section className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free. No credit card required. Upgrade anytime.
          </p>
        </section>

        <section className="container mx-auto px-6 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border border-border bg-card p-8 shadow-soft ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                {plan.popular && (
                  <span className="text-sm px-2 py-1 rounded bg-secondary text-secondary-foreground">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 text-left mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? "hero" : "default"} className="w-full">
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
