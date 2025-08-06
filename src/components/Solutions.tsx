import { Card } from "@/components/ui/card";

const Solutions = () => {
  const solutions = [
    {
      title: "Basement Legalization",
      description: "Converting existing basements into compliant, livable spaces according to NYC 2025 standards.",
      features: ["Code Compliance", "Safety Standards", "Permit Assistance"]
    },
    {
      title: "Multi-Level Underground Development",
      description: "Maximizing subsurface potential with sophisticated multi-story underground structures.",
      features: ["Space Optimization", "Structural Engineering", "Sustainable Design"]
    },
    {
      title: "Mixed-Use Underground Spaces",
      description: "Creating versatile underground environments for residential, commercial, and community use.",
      features: ["Flexible Layouts", "Natural Lighting", "Ventilation Systems"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive underground development services that transform subsurface space 
            into valuable, compliant, and sustainable living environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-8 hover:shadow-deep transition-all duration-300 transform hover:-translate-y-2 border-border bg-card">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-card-foreground">
                    <div className="w-2 h-2 bg-copper rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;