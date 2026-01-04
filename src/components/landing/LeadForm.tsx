import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll contact you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", businessType: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const businessTypes = variant === "accounting" 
    ? ["Startup", "SME", "Large Enterprise", "E-Commerce", "Retail", "Other"]
    : ["Startup", "SME", "Retail & E-Commerce", "Contractor/Consultant", "Import/Export", "Other"];

  return (
    <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-12 bg-background"
          />
        </div>
        
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="h-12 bg-background"
          />
        </div>
        
        <div>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="h-12 bg-background"
          />
        </div>
        
        <div>
          <Select 
            value={formData.businessType} 
            onValueChange={(value) => setFormData({ ...formData, businessType: value })}
          >
            <SelectTrigger className="h-12 bg-background">
              <SelectValue placeholder={variant === "vat" ? "Select Business Type" : "Business Type"} />
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
          <Textarea
            placeholder={variant === "vat" ? "Your VAT Query" : "Tell us about your needs"}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[100px] bg-background resize-none"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full h-12 text-base font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : buttonText}
        </Button>
      </form>
    </div>
  );
};

export default LeadForm;