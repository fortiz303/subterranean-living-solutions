import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Go Underground?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us to unlock the potential beneath your properties. 
            Let's discuss how subterranean development can transform your portfolio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Partnership Opportunities
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're seeking forward-thinking property owners and developers to pioneer 
              the future of urban housing. Our partnership model ensures shared success 
              while you retain full ownership of your land assets.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-copper rounded-full"></div>
                <span className="text-card-foreground">Land ownership remains with you</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-copper rounded-full"></div>
                <span className="text-card-foreground">Shared revenue from underground development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-copper rounded-full"></div>
                <span className="text-card-foreground">Full project management and execution</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-copper rounded-full"></div>
                <span className="text-card-foreground">Risk mitigation and compliance guarantee</span>
              </div>
            </div>
            
            <Button variant="underground" size="lg" className="w-full">
              Schedule a Consultation
            </Button>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 bg-card border-border">
              <h4 className="text-lg font-semibold text-card-foreground mb-4">
                Direct Contact
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <span>📧</span>
                  <span>partnerships@subterranean-solutions.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📱</span>
                  <span>(555) 123-UNDERGROUND</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📍</span>
                  <span>NYC Metro Area</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h4 className="text-lg font-semibold text-card-foreground mb-4">
                Project Inquiry
              </h4>
              <p className="text-muted-foreground mb-4">
                Have a specific property in mind? We'd love to discuss the underground potential.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h4 className="text-lg font-semibold text-card-foreground mb-4">
                Investment Opportunities
              </h4>
              <p className="text-muted-foreground mb-4">
                Interested in funding subterranean development projects? Let's explore investment partnerships.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;