import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Benefits from "@/components/Benefits";
import Compliance from "@/components/Compliance";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <Benefits />
      <Compliance />
      <Contact />
    </main>
  );
};

export default Index;
