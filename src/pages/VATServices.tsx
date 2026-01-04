import { CheckCircle, Phone, FileCheck, ShieldCheck, ClipboardList, Users, ArrowRight, Clock, BadgeCheck, Building2, ShoppingCart, Briefcase, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import LeadForm from "@/components/landing/LeadForm";
import vatHero from "@/assets/vat-hero.jpg";

const VATServices = () => {
  const services = [
    {
      icon: FileCheck,
      title: "VAT Registration in UAE",
      description: "Quick and hassle-free registration with the Federal Tax Authority."
    },
    {
      icon: ClipboardList,
      title: "VAT Return Filing",
      description: "Accurate and timely filing of your VAT returns."
    },
    {
      icon: ShieldCheck,
      title: "VAT Advisory & Optimization",
      description: "Strategic advice to minimize liabilities legally."
    },
    {
      icon: Users,
      title: "Audit Support & Documentation",
      description: "Complete support for FTA audits and compliance."
    }
  ];

  const benefits = [
    { icon: Clock, text: "Fast registration turnaround" },
    { icon: CheckCircle, text: "Error-free VAT returns" },
    { icon: ShieldCheck, text: "FTA audit support" },
    { icon: BadgeCheck, text: "Tailored for your business" }
  ];

  const targetAudience = [
    { icon: Building2, title: "Startups & SMEs" },
    { icon: ShoppingCart, title: "Retail & E-Commerce" },
    { icon: Briefcase, title: "Contractors & Consultants" },
    { icon: Package, title: "Import/Export Businesses" }
  ];

  const steps = [
    { number: "01", title: "Sign Up & Share Documents", description: "Quick onboarding process" },
    { number: "02", title: "We Register & File Returns", description: "Complete VAT management" },
    { number: "03", title: "Get Compliant & Enjoy Peace of Mind", description: "Stay worry-free" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px]">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${vatHero})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        
        {/* Decorative curves */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
          <svg className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-10" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-primary-foreground animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 text-gold-light" />
                <span className="text-sm font-medium">FTA Certified Experts</span>
              </div>
              
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-balance">
                VAT Registration & Compliance in Dubai
              </h1>
              
              <p className="text-xl lg:text-2xl mb-4 text-primary-foreground/90">
                Hassle-free VAT solutions for businesses of all sizes.
              </p>
              
              <p className="text-lg mb-8 text-primary-foreground/80">
                Stay compliant, avoid penalties & file on time.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="font-semibold group" asChild>
                  <a href="tel:+971585744945">
                    <Phone className="mr-2 h-5 w-5" />
                    Register for VAT Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Right form */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <LeadForm 
                title="Free VAT Consultation"
                subtitle="Get expert advice on your VAT requirements"
                buttonText="Get Free VAT Help"
                variant="vat"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Offer */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-3 block">What We Offer</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete VAT Services
            </h2>
            <p className="text-muted-foreground text-lg">
              End-to-end VAT solutions to keep your business compliant with UAE tax laws.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-background p-8 rounded-2xl border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Certified Experts + Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gold/20 rounded-3xl transform -rotate-3" />
                  <img 
                    src={vatHero} 
                    alt="Certified VAT experts in Dubai" 
                    className="relative z-10 rounded-3xl shadow-elegant object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-3 block">Certified VAT Experts</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Stay Compliant with UAE Federal Tax Authority
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our specialists ensure your VAT processes are compliant with UAE Federal Tax Authority (FTA) guidelines. We stay updated with the latest regulations to protect your business.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who Is This For */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-3 block">Perfect For</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Who Is This For?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our VAT services cater to businesses across all industries in Dubai.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {targetAudience.map((item, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How VAT Works */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-light font-semibold text-sm tracking-widest uppercase mb-3 block">Simple Process</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              How VAT Works
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Three simple steps to VAT compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <span className="text-3xl font-serif font-bold text-primary-foreground">{step.number}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 right-0 w-1/2 border-t-2 border-dashed border-primary-foreground/20 transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elegant border border-border">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Get Your VAT Sorted Today
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Don't risk penalties. Let our certified VAT experts handle your registration and compliance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="font-semibold" asChild>
                      <a href="tel:+971585744945">
                        <Phone className="mr-2 h-5 w-5" />
                        Call: +971 58 574 4945
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="lg:pl-8">
                  <LeadForm 
                    title="Quick VAT Help"
                    subtitle="We'll respond within 24 hours"
                    buttonText="Submit"
                    variant="vat"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default VATServices;