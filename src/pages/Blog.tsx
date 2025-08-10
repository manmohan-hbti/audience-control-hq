import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import emailImg from "@/assets/blog-email-dashboard.jpg";
import growthImg from "@/assets/blog-growth-chart.jpg";
import podcastImg from "@/assets/blog-podcast-studio.jpg";

const posts = [
  {
    title: "How to Move Your Audience from Social to Email",
    excerpt:
      "A step‑by‑step playbook to convert followers into subscribers you truly own.",
    date: "2025-07-01",
    read: "6 min read",
    image: emailImg,
    tags: ["Email Marketing", "Strategy"],
  },
  {
    title: "Launch a High‑Performing Referral Program",
    excerpt:
      "Turn your subscribers into your biggest growth engine with incentives that work.",
    date: "2025-06-18",
    read: "8 min read",
    image: growthImg,
    tags: ["Growth", "Referrals"],
  },
  {
    title: "Creator’s Guide to Monetizing a Newsletter",
    excerpt:
      "From paid subscriptions to affiliate revenue—real tactics that drive results.",
    date: "2025-05-29",
    read: "7 min read",
    image: podcastImg,
    tags: ["Monetization", "Playbooks"],
  },
];

const Blog = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "InfluencersKit Blog",
    description:
      "Resources for creators on email marketing, growth strategies, and monetization.",
    url: "/blog",
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <SEO
        title="Blog – Tips for Creators"
        description="Actionable resources on email marketing, audience growth, and monetization for creators."
        path="/blog"
        jsonLd={jsonLd}
      />

      <main className="pt-20 pb-24">
        <section className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Playbooks, tutorials, and best practices to build, grow, manage, and monetize your audience.
          </p>
        </section>

        <section className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft group">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">
                  {new Date(post.date).toLocaleDateString()} • {post.read}
                </div>
                <h2 className="text-xl font-semibold mb-2 story-link">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
