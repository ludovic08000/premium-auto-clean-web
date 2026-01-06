
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";
import { Wrench } from "lucide-react";

interface ServiceSelectorProps {
  form: UseFormReturn<ContactFormValues>;
}

const ServiceSelector = ({ form }: ServiceSelectorProps) => {
  const services = [
    "Diagnostic PC/Mac",
    "Réparation écran",
    "Suppression virus",
    "Récupération de données",
    "Remplacement batterie",
    "Optimisation système",
    "Installation réseau",
    "Autre"
  ];
  
  return (
    <FormField
      control={form.control}
      name="service"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-foreground flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" />
            <span>Service souhaité</span>
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-card border-primary/30 text-foreground hover:border-primary/60 transition-all">
                <SelectValue placeholder="Sélectionner un service" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-card border-primary/30 text-foreground max-h-60">
              {services.map((service) => (
                <SelectItem 
                  key={service} 
                  value={service}
                  className="hover:bg-primary/10 focus:bg-primary/10 focus:text-foreground"
                >
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
};

export default ServiceSelector;
