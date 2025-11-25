import { Palette, Code, TrendingUp, Search, ShoppingCart, Globe } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Beautiful, modern designs that captivate your audience and enhance user experience",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Robust, scalable solutions built with the latest technologies and best practices",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic campaigns that drive engagement, conversions, and business growth",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Optimize your online presence and rank higher in search engine results",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Complete online store solutions that boost sales and customer satisfaction",
  },
  {
    icon: Globe,
    title: "Offshore Services",
    description: "Global expertise delivered with quality, efficiency, and cost-effectiveness",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-large transition-smooth"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-smooth">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
