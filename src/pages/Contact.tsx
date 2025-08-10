import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Get in
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-soft">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h2>
                    
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            First Name
                          </label>
                          <Input placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-foreground">
                            Last Name
                          </label>
                          <Input placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Email
                        </label>
                        <Input type="email" placeholder="Enter your email address" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Subject
                        </label>
                        <Input placeholder="What's this about?" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Message
                        </label>
                        <Textarea 
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-32"
                        />
                      </div>
                      
                      <Button variant="hero" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-6 text-foreground">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-muted-foreground">hello@influencerskit.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <div className="text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Address</div>
                        <div className="text-muted-foreground">
                          123 Creator Street<br />
                          San Francisco, CA 94107
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Business Hours</div>
                        <div className="text-muted-foreground">
                          Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                          Weekends: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Card */}
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-foreground">Need Quick Help?</h4>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Check out our help center for instant answers to common questions.
                    </p>
                    <Button variant="outline" className="w-full">
                      Visit Help Center
                    </Button>
                  </CardContent>
                </Card>

                {/* Sales Card */}
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-foreground">Interested in Enterprise?</h4>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Get in touch with our sales team for custom solutions.
                    </p>
                    <Button variant="default" className="w-full">
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;