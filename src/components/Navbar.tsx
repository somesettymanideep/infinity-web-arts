import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const services = [
  { name: "Web Design", path: "/services/web-design" },
  { name: "Web Development", path: "/services/web-development" },
  { name: "Digital Marketing", path: "/services/digital-marketing" },
  { name: "SEO Services", path: "/services/seo" },
  { name: "E-Commerce", path: "/services/ecommerce" },
  { name: "Offshore Services", path: "/services/offshore" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Technologies", path: "/#technologies" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path.includes("#")) {
      return location.pathname === "/" && path.includes(location.hash);
    }
    return location.pathname === path;
  };

  const isServiceActive = () => {
    return location.pathname.startsWith("/services");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="StackItSoft Logo" 
              className="h-10 transition-smooth group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-smooth hover:text-primary flex items-center gap-1 ${
                  isServiceActive() ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-background border border-border rounded-xl shadow-large py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-smooth hover:bg-secondary hover:text-primary ${
                          location.pathname === service.path ? "text-primary bg-secondary" : "text-muted-foreground"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button size="sm" className="shadow-medium">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-smooth hover:text-primary px-4 py-2 rounded-lg ${
                    isActive(link.path)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full text-left text-sm font-medium transition-smooth hover:text-primary px-4 py-2 rounded-lg flex items-center justify-between ${
                    isServiceActive() ? "text-primary bg-secondary" : "text-muted-foreground"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-sm transition-smooth hover:text-primary px-4 py-2 rounded-lg ${
                          location.pathname === service.path ? "text-primary bg-secondary" : "text-muted-foreground"
                        }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-smooth hover:text-primary px-4 py-2 rounded-lg ${
                    isActive(link.path)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mx-4 mt-2">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
