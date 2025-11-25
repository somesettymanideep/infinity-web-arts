import { Trophy, Users, Briefcase, Heart } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "500+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    number: "300+",
    label: "Happy Clients",
  },
  {
    icon: Trophy,
    number: "50+",
    label: "Awards Won",
  },
  {
    icon: Heart,
    number: "10+",
    label: "Years Experience",
  },
];

const Statistics = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-large transition-smooth group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-smooth">
                  <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
