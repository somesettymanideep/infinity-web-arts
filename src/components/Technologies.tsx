import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const technologies = [
  {
    name: "WordPress",
    number: "01",
    description: "WordPress is an open source software. It is publishing software with a focus on ease of speed, and a great user experience.",
    icon: "🔷",
  },
  {
    name: "Magento",
    number: "02",
    description: "Magento boasts a strong portfolio of cloud-based omni channel solutions including in-store, retail associate etc.",
    icon: "🔶",
  },
  {
    name: "Joomla",
    number: "03",
    description: "In today's highly competitive world, it has become necessary to have an impressive website so as to attract more customers.",
    icon: "🟦",
  },
  {
    name: "Shopify",
    number: "04",
    description: "Build your online store with Shopify's powerful e-commerce platform. Easy setup, beautiful themes, and robust features.",
    icon: "🟩",
  },
  {
    name: "PHP",
    number: "05",
    description: "PHP is a type of an open source programming language that is a very popular for developing web applications.",
    icon: "🟣",
  },
  {
    name: ".NET",
    number: "06",
    description: "ASP.NET is a free, fully supported Web application framework that helps you create standards-based Web solutions.",
    icon: "🔵",
  },
  {
    name: "HTML5",
    number: "07",
    description: "Our team is well versed with responsive designs using core techniques as well based on popular CSS frameworks.",
    icon: "🟠",
  },
  {
    name: "Custom Design",
    number: "08",
    description: "Our team is well versed with responsive designs using core techniques as well based on popular CSS frameworks.",
    icon: "🎨",
  },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            We Specialize in Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            We harness cutting-edge technologies to create innovative, user-centric websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.number}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary overflow-hidden transition-smooth hover:shadow-large"
            >
              <div className="absolute top-4 right-4 text-6xl opacity-5 group-hover:opacity-10 transition-smooth">
                {tech.icon}
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl">{tech.icon}</span>
                  <span className="text-sm font-mono text-muted-foreground">{tech.number}</span>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {tech.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-auto text-primary hover:bg-transparent group-hover:translate-x-1 transition-smooth"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
