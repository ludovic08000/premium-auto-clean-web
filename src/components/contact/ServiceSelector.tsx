
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";

interface ServiceSelectorProps {
  form: UseFormReturn<ContactFormValues>;
}

const ServiceSelector = ({ form }: ServiceSelectorProps) => {
  const services = [
    "Mon PC est lent",
    "Virus / Arnaque",
    "Écran cassé",
    "Batterie HS",
    "Récupération de données",
    "Installation / Configuration",
    "Problème WiFi",
    "Autre problème"
  ];
  
  return (
    <FormField
      control={form.control}
      name="service"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Quel est le problème ?</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Choisir..." />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ServiceSelector;
