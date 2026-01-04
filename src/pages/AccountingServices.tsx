import { CheckCircle, Phone, BookOpen, Calculator, FileText, Users, ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import LeadForm from "@/components/landing/LeadForm";
import accountingHero from "@/assets/accounting-hero.jpg";

const AccountingServices = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Full Accounting & Bookkeeping",
      description: "Keep your books updated and error-free — monthly or quarterly."
    },
    {
      icon: Calculator,
      title: "VAT & Tax Compliance",
      description: "Registration, returns, advisory & audits."
    },
    {
      icon: Users,
      title: "Payroll & HR Support",
      description: "Payroll setup, salary calculations, timely wages."
    },
    {
      icon: FileText,
      title: "Management Reporting",
      description: "Cashflow, profit & loss, balance sheet insights."
    }
  ];

  const benefits = [
    "Accurate & compliant bookkeeping",
    "VAT, corporate tax & compliance",
    "Payroll & HR support",
    "Timely financial reporting",
    "Dedicated expert support"
  ];

  const steps = [
    { number: "01", title: "Tell Us Your Needs", description: "Share your business requirements with us" },
    { number: "02", title: "We Design Your Solution", description: "Custom-tailored accounting solutions" },
    { number: "03", title: "Ongoing Accounting Support", description: "Continuous professional assistance" },
    { number: "04", title: "Compliance & Reporting Delivered", description: "Timely and accurate deliverables" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px]">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${accountingHero})` }}
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
                <Shield className="h-4 w-4 text-gold-light" />
                <span className="text-sm font-medium">Trusted by Dubai SMEs</span>
              </div>
              
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-balance">
                Professional Accounting Services in Dubai
              </h1>
              
              <p className="text-xl lg:text-2xl mb-4 text-primary-foreground/90">
                Expert bookkeeping, VAT, payroll & financial reporting for businesses.
              </p>
              
              <div className="flex items-center gap-4 mb-8 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold-light" />
                  <span>Quick Setup</span>
                </div>
                <span className="text-primary-foreground/40">|</span>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-gold-light" />
                  <span>Clear Pricing</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="font-semibold group" asChild>
                  <a href="tel:+971585744945">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Right form */}
            <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <LeadForm 
                title="Get a Free Quote"
                subtitle="Fill in your details and we'll contact you within 24 hours"
                buttonText="Get My Free Quote"
                variant="accounting"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-3 block">Why Choose Us</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Dubai's Top Accounting Partner for Businesses
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We handle your books so you can grow your business. Our team of certified professionals ensures accuracy, compliance, and timely delivery.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
                <img 
                  src={accountingHero} 
                  alt="Professional accounting team in Dubai" 
                  className="relative z-10 rounded-3xl shadow-elegant object-cover w-full h-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold text-accent-foreground p-6 rounded-2xl shadow-lg z-20">
                  <div className="text-3xl font-bold font-serif">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase mb-3 block">Our Services</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Accounting Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              From bookkeeping to tax compliance, we've got your financial needs covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-card p-8 rounded-2xl border border-border hover:shadow-elegant hover:border-primary/20 transition-all duration-300 animate-fade-in"
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
      
      {/* How It Works */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-light font-semibold text-sm tracking-widest uppercase mb-3 block">Process</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              How It Works
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Simple, transparent process to get you started
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="text-6xl font-serif font-bold text-primary-foreground/10 mb-4">{step.number}</div>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 border-t-2 border-dashed border-primary-foreground/20 transform translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Simplify Your Finances?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of Dubai businesses that trust us with their accounting needs. Get started today with a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="font-semibold" asChild>
                <a href="tel:+971585744945">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +971 58 574 4945
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-semibold" asChild>
                <a href="https://www.lapelaconsulting.com/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AccountingServices;