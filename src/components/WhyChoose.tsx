import { Shield, Zap, HeadphonesIcon, Award, Clock, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "10+ years of proven expertise delivering quality solutions to businesses worldwide",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality or attention to detail",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance to ensure your business runs smoothly at all times",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Highly skilled professionals with extensive experience in latest technologies",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and ensure projects are completed within agreed timelines",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Cost-effective solutions that deliver exceptional value for your investment",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver excellence through innovation, dedication, and proven expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-large transition-smooth group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-smooth">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-smooth" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
