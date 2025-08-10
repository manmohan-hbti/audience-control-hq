import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Product = () => {
  const pillars = [
    {
      id: "build",
      title: "Build Your List",
      description: "Create stunning landing pages and forms that convert visitors into loyal subscribers",
      features: [
        "Drag-and-drop landing page builder",
        "Customizable opt-in forms",
        "A/B testing capabilities",
        "Integration with 100+ platforms",
        "Mobile-responsive templates",
        "Analytics and conversion tracking"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "grow",
      title: "Grow Your Audience",
      description: "Scale your email list with powerful automation and growth tools",
      features: [
        "Email automation sequences",
        "Referral program system",
        "Social sharing tools",
        "Lead magnets and freebies",
        "Cross-platform promotion",
        "Viral growth mechanics"
      ],
      color: "from-green-500 to-teal-600"
    },
    {
      id: "manage",
      title: "Manage Relationships",
      description: "Keep your audience engaged with smart segmentation and personalization",
      features: [
        "Advanced audience segmentation",
        "Behavioral tracking",
        "Engagement analytics",
        "Contact management CRM",
        "Tag-based organization",
        "Lifecycle management"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      id: "monetize",
      title: "Monetize Directly",
      description: "Turn your email list into sustainable revenue streams",
      features: [
        "Paid newsletter subscriptions",
        "Product launch campaigns",
        "Affiliate marketing tools",
        "Revenue analytics",
        "Payment processing",
        "Customer lifetime value tracking"
      ],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Complete Creator
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Email Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Everything you need to build, grow, manage, and monetize your email community in one powerful platform.
            </p>
            <Button variant="hero" size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Product Pillars */}
        {pillars.map((pillar, index) => (
          <section 
            key={pillar.id} 
            id={pillar.id}
            className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'gradient-subtle'}`}
          >
            <div className="container mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                    {pillar.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    {pillar.description}
                  </p>
                  
                  {/* Features list */}
                  <div className="space-y-4 mb-8">
                    {pillar.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="default" size="lg">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`h-96 rounded-2xl bg-gradient-to-br ${pillar.color} shadow-strong relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">{pillar.title} Interface</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Take Control?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of creators who've built thriving email communities with InfluencersKit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Product;