
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";
import { Car } from "lucide-react";

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
          <FormLabel className="text-gold flex items-center gap-2">
            <Car className="h-4 w-4" />
            <span>Type de véhicule</span>
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-dark-light border-gold/30 text-gold hover:border-gold/60 transition-all">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-dark-light border-gold/30 text-gold max-h-60">
              <SelectItem 
                value="Citadine"
                className="hover:bg-gold/10 focus:bg-gold/10 focus:text-gold"
              >
                Citadine
              </SelectItem>
              <SelectItem 
                value="Berline"
                className="hover:bg-gold/10 focus:bg-gold/10 focus:text-gold"
              >
                Berline
              </SelectItem>
              <SelectItem 
                value="SUV"
                className="hover:bg-gold/10 focus:bg-gold/10 focus:text-gold"
              >
                SUV
              </SelectItem>
              <SelectItem 
                value="Utilitaire"
                className="hover:bg-gold/10 focus:bg-gold/10 focus:text-gold"
              >
                Utilitaire
              </SelectItem>
            </SelectContent>
          </Select>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
};

export default VehicleSelector;
