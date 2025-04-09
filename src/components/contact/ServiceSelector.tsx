
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";
import { Settings } from "lucide-react";

interface ServiceSelectorProps {
  form: UseFormReturn<ContactFormValues>;
}

const ServiceSelector = ({ form }: ServiceSelectorProps) => {
  const services = [
    "Lavage intérieur",
    "Lavage extérieur",
    "Lavage complet",
    "Rénovation esthétique",
    "Traitement céramique",
    "Abonnement"
  ];
  
  return (
    <FormField
      control={form.control}
      name="service"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gold flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Service souhaité</span>
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-dark-light border-gold/30 text-gold hover:border-gold/60 transition-all">
                <SelectValue placeholder="Sélectionner un service" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-dark-light border-gold/30 text-gold max-h-60">
              {services.map((service) => (
                <SelectItem 
                  key={service} 
                  value={service}
                  className="hover:bg-gold/10 focus:bg-gold/10 focus:text-gold"
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
