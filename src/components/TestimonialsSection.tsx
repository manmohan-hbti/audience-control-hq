import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "YouTube Creator",
      subscribers: "500K",
      content: "InfluencersKit helped me build a 50K email list in 6 months. Now I'm making $10K/month from my newsletter alone!",
      avatar: "SJ"
    },
    {
      name: "Marcus Chen",
      role: "Podcast Host",
      subscribers: "200K",
      content: "Finally, a platform that puts creators first. My email open rates are 45% higher than industry average.",
      avatar: "MC"
    },
    {
      name: "Lisa Rodriguez",
      role: "Instagram Influencer",
      subscribers: "1M",
      content: "The automation features are incredible. I can focus on creating content while my email list grows automatically.",
      avatar: "LR"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Loved by
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Creators Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of content creators who've taken control of their audience and revenue
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-strong transition-smooth border border-border relative"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.subscribers} followers
                  </p>
                </div>
              </div>
              
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Active Creators</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Emails Sent</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Creator Revenue</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;