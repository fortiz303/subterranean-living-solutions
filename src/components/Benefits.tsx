import { Card } from "@/components/ui/card";

const Benefits = () => {
  const benefits = [
    {
      title: "Maximize Land Value",
      description: "Unlock the untapped potential of subsurface space while retaining surface property value.",
      icon: "📈"
    },
    {
      title: "High ROI Potential", 
      description: "Significant return on investment through innovative space utilization and emerging market demand.",
      icon: "💰"
    },
    {
      title: "Sustainable Development",
      description: "Environmentally conscious construction with reduced surface footprint and energy efficiency.",
      icon: "🌱"
    },
    {
      title: "Code Compliant",
      description: "Full adherence to NYC building codes, safety regulations, and basement legalization standards.",
      icon: "✅"
    },
    {
      title: "Market Differentiation",
      description: "Position your properties at the forefront of urban housing innovation and sustainability.",
      icon: "🏆"
    },
    {
      title: "Future-Ready Infrastructure",
      description: "Designed for long-term value with adaptable spaces and modern utility integration.",
      icon: "🔮"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Underground?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Underground development offers unique advantages that traditional construction cannot match.
            Discover the benefits of subterranean living solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card border-border">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;