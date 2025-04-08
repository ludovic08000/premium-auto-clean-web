
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";

interface VehicleSelectorProps {
  form: UseFormReturn<ContactFormValues>;
}

const VehicleSelector = ({ form }: VehicleSelectorProps) => {
  return (
    <FormField
      control={form.control}
      name="vehicule"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Type de véhicule</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-dark border-gold/30 text-gold">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-dark border-gold/30 text-gold">
              <SelectItem value="Citadine">Citadine</SelectItem>
              <SelectItem value="Berline">Berline</SelectItem>
              <SelectItem value="SUV">SUV</SelectItem>
              <SelectItem value="Utilitaire">Utilitaire</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default VehicleSelector;
