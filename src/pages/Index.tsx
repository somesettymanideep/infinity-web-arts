import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import HireDeveloper from "@/components/HireDeveloper";
import Statistics from "@/components/Statistics";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Services />
        <Technologies />
        <HireDeveloper />
        <Statistics />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
