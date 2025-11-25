import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                About TechServe
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Your trusted partner in digital transformation and IT excellence
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                Who We Are
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  TechServe is a leading IT services company specializing in web design, web development, 
                  digital marketing, SEO services, and e-commerce solutions. With over 10 years of 
                  experience in the industry, we have established ourselves as a trusted partner for 
                  businesses worldwide seeking to enhance their digital presence.
                </p>
                <p>
                  Our team of highly skilled professionals brings together expertise in cutting-edge 
                  technologies including WordPress, Magento, Joomla, Shopify, PHP, .NET, and HTML5. 
                  We pride ourselves on delivering innovative, user-centric solutions that drive real 
                  results for our clients.
                </p>
                <p>
                  At TechServe, we believe in building long-term partnerships with our clients. Our 
                  commitment to excellence, combined with competitive pricing and flexible engagement 
                  models, makes us the ideal choice for businesses of all sizes—from startups to 
                  established enterprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="p-8 rounded-2xl bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and success in the digital age.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the global leader in IT services, recognized for excellence, innovation, 
                  and transformative digital solutions.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, integrity, innovation, and client success are at the heart of 
                  everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-center">
                Why Partner With Us
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Proven Track Record
                  </h3>
                  <p>
                    With 500+ successfully completed projects and 300+ satisfied clients across 
                    the globe, we have demonstrated our ability to deliver exceptional results 
                    consistently.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Expert Team
                  </h3>
                  <p>
                    Our team comprises seasoned professionals with over 10 years of collective 
                    experience in the latest technologies and industry best practices.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Flexible Engagement
                  </h3>
                  <p>
                    Whether you need project-based assistance or dedicated resources, we offer 
                    flexible engagement models at competitive rates starting from $10/hour.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    24/7 Support
                  </h3>
                  <p>
                    We provide round-the-clock support to ensure your business operations run 
                    smoothly without interruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
