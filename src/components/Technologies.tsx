import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import wordpress from "@/assets/WordPress-Emblem.png"
import react from "@/assets/react.png"
import Python from "@/assets/python.png"
import shopify from "@/assets/shopify.png"
import php from "@/assets/php.png"
import django from "@/assets/django.png"
import html from "@/assets/html.png"
import custom from "@/assets/custom.png"

const technologies = [
  {
    name: "WordPress",
    number: "01",
    description: "WordPress is an open source software. It is publishing software with a focus on ease of speed, and a great user experience.",
    image: wordpress,
  },
  {
    name: "Python",
    number: "02",
    description: "Python is a versatile programming language ideal for rapid web development with extensive libraries like Flask and Django.",
    image: Python,
  },
  {
    name: "React",
    number: "03",
    description: "React is a powerful JavaScript library for building dynamic user interfaces make it efficient for creating responsive, high-performance web applications.",
    image: react,
  },
  {
    name: "Shopify",
    number: "04",
    description: "Build your online store with Shopify's powerful e-commerce platform. Easy setup, beautiful themes, and robust features.",
    image: shopify,
  },
  {
    name: "PHP",
    number: "05",
    description: "PHP is a type of an open source programming language that is a very popular for developing web applications.",
    image: php,
  },
  {
    name: "Django",
    number: "06",
    description: "Django is a high-level Python web framework designed for rapid development of secure, database-driven websites.",
    image: django,
  },
  {
    name: "HTML5",
    number: "07",
    description: "Our team is well versed with responsive designs using core techniques as well based on popular CSS frameworks.",
    image: html,
  },
  {
    name: "Custom Design",
    number: "08",
    description: "Our team is well versed with responsive designs using core techniques as well based on popular CSS frameworks.",
    image: custom,
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
                <img
            src={tech.image}
           style={{width:"100px"}}
            className="w-full h-full object-cover"
          />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  {/* <span className="text-5xl">{tech.icon}</span> */}
                  <img
            src={tech.image}
           style={{width:"100px"}}
            className="w-full h-full object-cover"
          />
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
