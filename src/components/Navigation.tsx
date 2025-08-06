import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-xl font-bold text-primary">
              Subterranean Solutions
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#solutions" className="text-foreground hover:text-primary transition-colors">
                Solutions
              </a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
                Benefits
              </a>
              <a href="#compliance" className="text-foreground hover:text-primary transition-colors">
                Compliance
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="default">
              Partner With Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#solutions" className="block px-3 py-2 text-foreground hover:text-primary">
                Solutions
              </a>
              <a href="#benefits" className="block px-3 py-2 text-foreground hover:text-primary">
                Benefits
              </a>
              <a href="#compliance" className="block px-3 py-2 text-foreground hover:text-primary">
                Compliance
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button variant="default" className="w-full">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;