
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";

interface ServiceSelectorProps {
  form: UseFormReturn<ContactFormValues>;
}

const ServiceSelector = ({ form }: ServiceSelectorProps) => {
  return (
    <FormField
      control={form.control}
      name="service"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Service souhaité</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-dark border-gold/30 text-gold">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-dark border-gold/30 text-gold">
              <SelectItem value="Lavage intérieur">Lavage intérieur</SelectItem>
              <SelectItem value="Lavage extérieur">Lavage extérieur</SelectItem>
              <SelectItem value="Lavage complet">Lavage complet</SelectItem>
              <SelectItem value="Rénovation esthétique">Rénovation esthétique</SelectItem>
              <SelectItem value="Traitement céramique">Traitement céramique</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ServiceSelector;
