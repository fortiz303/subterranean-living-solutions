import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-underground.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Underground living architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-underground/90 to-underground/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-underground-foreground mb-8 leading-tight">
          Subterranean
          <span className="block text-copper">Living Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-underground-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Pioneering the future of urban housing through innovative underground development. 
          Maximizing space, sustainability, and profitability beneath the surface.
        </p>
        
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-underground-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-underground-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;