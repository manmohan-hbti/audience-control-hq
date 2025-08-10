import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import creatorFood from "@/assets/creator-food-blogger.jpg";
import creatorAuthor from "@/assets/creator-author.jpg";
import creatorEntertainer from "@/assets/creator-entertainer.jpg";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Headline + CTA */}
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] text-foreground mb-6">
            For creators who
            <span className="block">mean business</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            InfluencersKit is the email‑first operating system for creators building a valuable business.
            Build, grow, manage, and monetize — while owning your audience directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button variant="hero" size="lg" className="hover-scale">
              Start free trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">Request a demo</Button>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">No credit card required</p>
        </div>

        {/* Right: Creator cards */}
        <div className="grid gap-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <article className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft animate-scale-in">
              <img
                src={creatorFood}
                alt="Food blogger creator holding award"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-foreground">Aisha Verma</h3>
                <p className="text-sm text-muted-foreground">YouTuber & Food Blogger</p>
              </div>
            </article>

            <article className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft">
              <img
                src={creatorAuthor}
                alt="Bestselling author portrait"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-foreground">Marcus Lee</h3>
                <p className="text-sm text-muted-foreground">Bestselling Author</p>
              </div>
            </article>
          </div>

          <article className="rounded-2xl overflow-hidden bg-card border border-border shadow-soft max-w-md sm:max-w-none">
            <img
              src={creatorEntertainer}
              alt="Entertainer with sunglasses portrait"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold text-foreground">J. Rivera</h3>
              <p className="text-sm text-muted-foreground">Award‑winning Entertainer</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
