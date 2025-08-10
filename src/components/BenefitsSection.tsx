import { Mail, TrendingUp, Users, DollarSign } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Mail,
      title: "Build Your List",
      description: "Create stunning landing pages and forms that convert visitors into subscribers. Integrate with all major platforms seamlessly."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Audience",
      description: "Leverage automation, referral programs, and social sharing tools to expand your reach organically and efficiently."
    },
    {
      icon: Users,
      title: "Manage Relationships",
      description: "Segment your audience, track engagement, and maintain deep relationships with your community through powerful CRM tools."
    },
    {
      icon: DollarSign,
      title: "Monetize Directly",
      description: "Turn your email list into revenue with paid subscriptions, product launches, and affiliate marketing opportunities."
    }
  ];

  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Everything You Need to 
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Own Your Audience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop playing by platform rules. Build a direct relationship with your audience 
            and create sustainable revenue streams that you control.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-strong transition-smooth border border-border hover:border-primary/20"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;