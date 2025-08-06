const Compliance = () => {
  return (
    <section id="compliance" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              NYC 2025 Compliance Ready
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our underground development solutions are designed to meet and exceed 
              New York City's 2025 Basement Legalization standards, ensuring your 
              investment is compliant, safe, and profitable.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Building Code Adherence</h4>
                  <p className="text-muted-foreground">Full compliance with NYC Building Code requirements for basement conversions and underground structures.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Safety & Habitability Standards</h4>
                  <p className="text-muted-foreground">Implementing proper egress, ceiling heights, natural light, and ventilation requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Permit & Approval Process</h4>
                  <p className="text-muted-foreground">Expert navigation of DOB permits, approvals, and inspection processes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-copper rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">LEED Certification Compatible</h4>
                  <p className="text-muted-foreground">Sustainable design practices that align with green building certifications.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Compliance Guarantee
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We guarantee that all our underground developments meet or exceed current 
                regulatory standards. Our team stays ahead of evolving regulations to 
                ensure your investment remains compliant and valuable.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Code Compliant</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-2xl font-bold text-primary">2025</div>
                  <div className="text-sm text-muted-foreground">Standard Ready</div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground">
                * All projects include comprehensive documentation and certification support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;