import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">L</span>
              </div>
              <div className="ml-2">
                <span className="font-serif font-bold text-xl">LAPELA</span>
                <span className="block text-xs opacity-80 tracking-widest">CONSULTING</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Partner with us to access tailored accounting and financial solutions designed to streamline your operations, enhance profitability, and set your business on a path to sustained success.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="https://www.lapelaconsulting.com/about-us" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="https://www.lapelaconsulting.com/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Services</a></li>
              <li><a href="https://www.lapelaconsulting.com/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Ifza Business Park, DDP PO Box 342001, Dubai, UAE</span>
              </li>
              <li>
                <a href="tel:+971585744945" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5" />
                  <span>+971 58 574 4945</span>
                </a>
              </li>
              <li>
                <a href="mailto:Info@lapelaconsulting.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                  <span>Info@lapelaconsulting.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Lapela Consulting. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;