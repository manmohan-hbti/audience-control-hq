import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Build", href: "/product#build" },
      { label: "Grow", href: "/product#grow" },
      { label: "Manage", href: "/product#manage" },
      { label: "Monetize", href: "/product#monetize" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help" },
      { label: "API Docs", href: "/docs" },
      { label: "Templates", href: "/templates" },
    ],
    Legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" },
      { label: "GDPR", href: "/gdpr" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/influencerskit", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com/influencerskit", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/influencerskit", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/influencerskit", label: "YouTube" },
    { icon: Linkedin, href: "https://linkedin.com/company/influencerskit", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IK</span>
                </div>
                <span className="text-xl font-bold text-foreground">InfluencersKit</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Empowering content creators to build, grow, and monetize their email communities. 
                Take control of your audience and revenue.
              </p>

              {/* Newsletter signup */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Stay Updated</h4>
                <div className="flex space-x-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button variant="default" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Links columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        to={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © 2024 InfluencersKit. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors hover:text-primary-foreground group"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;