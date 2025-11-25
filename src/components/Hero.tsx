import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import heroWebDesign from "@/assets/hero-web-design.jpg";
import heroItServices from "@/assets/hero-it-services.jpg";
import heroDigitalMarketing from "@/assets/hero-digital-marketing.jpg";

const slides = [
  {
    title: "Transform Your Digital Presence",
    subtitle: "Expert Web Design & Development Solutions",
    description: "We create stunning, high-performance websites that drive results for your business",
    image: heroWebDesign,
  },
  {
    title: "Innovative IT Services",
    subtitle: "Cutting-Edge Technology Solutions",
    description: "Harness the power of modern technologies to stay ahead of the competition",
    image: heroItServices,
  },
  {
    title: "Grow Your Business Online",
    subtitle: "Digital Marketing & SEO Excellence",
    description: "Reach your target audience and maximize your online visibility",
    image: heroDigitalMarketing,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </div>
      ))}
      
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="h-full flex items-center">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-block px-4 py-2 bg-background/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
              {slides[currentSlide].subtitle}
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="shadow-large">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 left-4 right-4 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-primary-foreground"
                    : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-lg bg-background/10 backdrop-blur-sm hover:bg-background/20 flex items-center justify-center text-primary-foreground transition-smooth"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-lg bg-background/10 backdrop-blur-sm hover:bg-background/20 flex items-center justify-center text-primary-foreground transition-smooth"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
