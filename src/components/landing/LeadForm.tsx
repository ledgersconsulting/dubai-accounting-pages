import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle, Shield, Clock, Sparkles } from "lucide-react";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: "accounting" | "vat";
}

const LeadForm = ({ 
  title = "Get a Free Quote", 
  subtitle = "Fill in your details and we'll get back to you within 24 hours",
  buttonText = "Get My Free Quote",
  variant = "accounting"
}: LeadFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    companyName: "",
    annualRevenue: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll contact you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", businessType: "", companyName: "", annualRevenue: "", message: "" });
      setCurrentStep(1);
      setIsSubmitting(false);
    }, 1000);
  };

  const businessTypes = variant === "accounting" 
    ? ["Startup", "SME", "Large Enterprise", "E-Commerce", "Retail", "Professional Services", "Other"]
    : ["Startup", "SME", "Retail & E-Commerce", "Contractor/Consultant", "Import/Export", "Other"];

  const revenueRanges = [
    "Less than AED 375,000",
    "AED 375,000 - AED 1 Million",
    "AED 1 Million - AED 5 Million",
    "AED 5 Million - AED 10 Million",
    "More than AED 10 Million"
  ];

  const formBenefits = [
    { icon: Clock, text: "Response in 2 hours" },
    { icon: Shield, text: "100% confidential" },
    { icon: CheckCircle, text: "No obligations" }
  ];

  const isStep1Valid = formData.name && formData.email && formData.phone;
  const isStep2Valid = formData.businessType && formData.companyName;

  return (
    <div className="bg-card rounded-2xl shadow-elegant border border-border overflow-hidden">
      {/* Form Header */}
      <div className="bg-gradient-to-r from-primary to-olive-dark p-6 text-primary-foreground">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-5 w-5 text-gold-light" />
          <span className="text-sm font-medium text-gold-light">Free Consultation</span>
        </div>
        <h3 className="font-serif text-2xl font-bold mb-1">{title}</h3>
        <p className="text-primary-foreground/80 text-sm">{subtitle}</p>
      </div>

      {/* Progress Steps */}
      <div className="px-6 pt-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              1
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">Contact</span>
          </div>
          <div className="flex-1 h-1 mx-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300" 
              style={{ width: currentStep >= 2 ? '100%' : '0%' }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              2
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">Business</span>
          </div>
          <div className="flex-1 h-1 mx-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300" 
              style={{ width: currentStep >= 3 ? '100%' : '0%' }}
            />
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${currentStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              3
            </div>
            <span className="text-xs text-muted-foreground hidden sm:inline">Details</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
        {/* Step 1: Contact Info */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
              <Input
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12 bg-background"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
              <Input
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12 bg-background"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
              <Input
                type="tel"
                placeholder="+971 50 123 4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12 bg-background"
              />
            </div>

            <Button 
              type="button"
              onClick={() => setCurrentStep(2)}
              disabled={!isStep1Valid}
              className="w-full h-12 text-base font-semibold"
            >
              Continue
            </Button>
          </div>
        )}

        {/* Step 2: Business Info */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Company Name *</label>
              <Input
                placeholder="Your Company LLC"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                required
                className="h-12 bg-background"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Business Type *</label>
              <Select 
                value={formData.businessType} 
                onValueChange={(value) => setFormData({ ...formData, businessType: value })}
              >
                <SelectTrigger className="h-12 bg-background">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  {businessTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Annual Revenue</label>
              <Select 
                value={formData.annualRevenue} 
                onValueChange={(value) => setFormData({ ...formData, annualRevenue: value })}
              >
                <SelectTrigger className="h-12 bg-background">
                  <SelectValue placeholder="Select revenue range" />
                </SelectTrigger>
                <SelectContent>
                  {revenueRanges.map((range) => (
                    <SelectItem key={range} value={range.toLowerCase()}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-3">
              <Button 
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="flex-1 h-12 text-base font-semibold"
              >
                Back
              </Button>
              <Button 
                type="button"
                onClick={() => setCurrentStep(3)}
                disabled={!isStep2Valid}
                className="flex-1 h-12 text-base font-semibold"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Message */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                {variant === "vat" ? "Your VAT Query" : "How can we help you?"}
              </label>
              <Textarea
                placeholder={variant === "vat" 
                  ? "Tell us about your VAT requirements..." 
                  : "Tell us about your accounting needs..."}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px] bg-background resize-none"
              />
            </div>

            <div className="flex gap-3">
              <Button 
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(2)}
                className="flex-1 h-12 text-base font-semibold"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                className="flex-1 h-12 text-base font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : buttonText}
              </Button>
            </div>
          </div>
        )}
      </form>

      {/* Form Footer */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          {formBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <benefit.icon className="h-3.5 w-3.5 text-primary" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;