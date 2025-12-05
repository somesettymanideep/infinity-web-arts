import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceImage from "@/assets/service-web-development.jpg";

const WebDevelopment = () => {
  const features = [
    "Custom Web Application Development",
    "Frontend & Backend Development",
    "API Development & Integration",
    "Database Design & Management",
    "Performance Optimization",
    "Security Implementation",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={serviceImage} alt="Web Development Services" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Web Development Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Robust, scalable solutions built with the latest technologies and best practices. 
                We develop high-performance web applications tailored to your business needs.
              </p>
              <Link to="/contact">
                <Button size="lg" className="shadow-medium">
                  Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  What We Offer
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our web development team specializes in building custom solutions using modern 
                  frameworks and technologies. From simple websites to complex web applications, 
                  we deliver code that is clean, maintainable, and scalable.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-large">
                <img src={serviceImage} alt="Web Development" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Build Your Web Application?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that exceeds expectations.
            </p>
            <Link to="/contact">
              <Button size="lg" className="shadow-medium">
                Start Your Project
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
