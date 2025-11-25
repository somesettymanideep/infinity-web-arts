import { Clock, CheckCircle, Users, DollarSign } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: DollarSign,
    title: "Competitive Rate",
    description: "$10/hour",
  },
  {
    icon: Users,
    title: "10+ Years Experience",
    description: "Expert team",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "8hrs/day, 5 days/week",
  },
  {
    icon: CheckCircle,
    title: "Top-Notch Quality",
    description: "Guaranteed excellence",
  },
];

const skills = [
  "PHP",
  "WordPress",
  "Python",
  "React",
  "Django",
  "React",
  "Node.js",
  "Python",
];

const HireDeveloper = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djEyaC0xMlYzNGMwLTMuMzEgMi42OS02IDYtNnM2IDIuNjkgNiA2em0tNi0xNmMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQ2djEyaC0xMlY0NmMwLTMuMzEgMi42OS02IDYtNnM2IDIuNjkgNiA2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Hire A Developer
          </h2>
          <p className="text-xl mb-4 text-primary-foreground/90">
            Save time and money—hire a web developer today
          </p>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            We offer skilled professionals proficient in PHP, WordPress, Joomla, Magento, and ASP.NET, 
            available at a competitive rate of $10 per hour. Whether you require assistance on a 
            project-by-project basis or need a dedicated designer or developer, our team is ready to 
            deliver excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-background/20 transition-smooth"
              >
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/80">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-primary-foreground/90 mb-4">
            Our dedicated designers and developers bring over Ten years of experience to the table, 
            ensuring top-notch expertise and quality results. With flexible scheduling tailored to your 
            convenience, we operate eight hours a day, five days a week, guaranteeing timely and efficient service.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-primary-foreground/20 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          <Button size="lg" variant="secondary" className="shadow-large">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HireDeveloper;
