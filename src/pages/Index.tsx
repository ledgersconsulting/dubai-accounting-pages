import { ArrowRight, Calculator, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient min-h-[500px] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              Simplify Your Finances, Amplify Your Growth
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Partner with us to access tailored accounting and financial solutions designed to streamline your operations, enhance profitability, and set your business on a path to sustained success.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" variant="secondary" className="font-semibold" asChild>
                <a href="https://www.lapelaconsulting.com/contact">
                  Discover the Difference
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Landing Pages Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-3 block">Our Services</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Explore Our Specialized Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the service that best fits your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Accounting Services Card */}
            <Link 
              to="/accounting-services" 
              className="group bg-background p-8 rounded-2xl border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Calculator className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                Professional Accounting Services
              </h3>
              <p className="text-muted-foreground mb-6">
                Expert bookkeeping, VAT, payroll & financial reporting for Dubai businesses. Quick setup with clear pricing.
              </p>
              <span className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            {/* VAT Services Card */}
            <Link 
              to="/vat-services" 
              className="group bg-background p-8 rounded-2xl border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <FileText className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                VAT Registration & Compliance
              </h3>
              <p className="text-muted-foreground mb-6">
                Hassle-free VAT solutions for businesses of all sizes. Stay compliant, avoid penalties & file on time.
              </p>
              <span className="inline-flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;