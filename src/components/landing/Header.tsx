import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Ifza Business Park, DDP PO Box 342001, Dubai, UAE</span>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+971585744945" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Phone className="h-4 w-4" />
              <span>+971 58 574 4945</span>
            </a>
            <a href="mailto:Info@lapelaconsulting.com" className="flex items-center gap-2 hover:text-gold-light transition-colors">
              <Mail className="h-4 w-4" />
              <span>Info@lapelaconsulting.com</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="bg-card py-4 px-4 shadow-elegant">
        <div className="container mx-auto flex justify-between items-center">
          <a href="https://www.lapelaconsulting.com" className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">L</span>
              </div>
              <div className="ml-2">
                <span className="font-serif font-bold text-xl text-foreground">LAPELA</span>
                <span className="block text-xs text-muted-foreground tracking-widest">CONSULTING</span>
              </div>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="https://www.lapelaconsulting.com" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="https://www.lapelaconsulting.com/about-us" className="text-foreground hover:text-primary transition-colors font-medium">About Us</a>
            <a href="https://www.lapelaconsulting.com/services" className="text-foreground hover:text-primary transition-colors font-medium">Our Services</a>
            <a href="https://www.lapelaconsulting.com/contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact Us</a>
          </div>
          
          <Button asChild className="hidden md:flex">
            <a href="https://www.lapelaconsulting.com/contact">Let's Talk</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;