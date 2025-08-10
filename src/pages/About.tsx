import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ceoImg from "@/assets/team-ceo.jpg";
import ctoImg from "@/assets/team-cto.jpg";
import growthImg from "@/assets/team-growth.jpg";

const About = () => {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InfluencersKit",
    url: "/about",
    logo: "/favicon.ico",
    sameAs: [
      "https://twitter.com/influencerskit",
      "https://instagram.com/influencerskit",
      "https://www.youtube.com/@influencerskit",
    ],
  };

  const team = [
    { name: "Ava Thompson", role: "CEO & Co‑founder", image: ceoImg },
    { name: "Daniel Park", role: "CTO & Co‑founder", image: ctoImg },
    { name: "Maya Patel", role: "Head of Growth", image: growthImg },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO
        title="About – InfluencersKit"
        description="Our mission is to help creators own their audience and revenue through email. Meet the team behind InfluencersKit."
        path="/about"
        jsonLd={orgJsonLd}
      />

      <main className="pt-20 pb-24">
        <section className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe creators should own their audience. Our email‑first platform helps creators build durable, valuable businesses.
          </p>
        </section>

        <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-16">
          <article className="bg-card border border-border rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower creators to build direct relationships with their audiences, free from the volatility of algorithm‑driven platforms. We provide the tools to collect emails, nurture communities, and monetize ethically.
            </p>
          </article>
          <article className="bg-card border border-border rounded-2xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Creator ownership over audience and data</li>
              <li>• Sustainable, long‑term growth</li>
              <li>• Radical simplicity in product and experience</li>
              <li>• Trust, privacy, and respect above all</li>
            </ul>
          </article>
        </section>

        <section className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((m) => (
              <article key={m.name} className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft">
                <img src={m.image} alt={`${m.name} – ${m.role}`} className="w-full h-72 object-cover" loading="lazy" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground">{m.name}</h3>
                  <p className="text-muted-foreground">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
