
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";
import { Monitor } from "lucide-react";

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
          <FormLabel className="text-foreground flex items-center gap-2">
            <Monitor className="h-4 w-4 text-primary" />
            <span>Type d'appareil</span>
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-card border-primary/30 text-foreground hover:border-primary/60 transition-all">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-card border-primary/30 text-foreground max-h-60">
              <SelectItem 
                value="PC Fixe"
                className="hover:bg-primary/10 focus:bg-primary/10 focus:text-foreground"
              >
                PC Fixe
              </SelectItem>
              <SelectItem 
                value="PC Portable"
                className="hover:bg-primary/10 focus:bg-primary/10 focus:text-foreground"
              >
                PC Portable
              </SelectItem>
              <SelectItem 
                value="Mac"
                className="hover:bg-primary/10 focus:bg-primary/10 focus:text-foreground"
              >
                Mac / MacBook
              </SelectItem>
              <SelectItem 
                value="Smartphone"
                className="hover:bg-primary/10 focus:bg-primary/10 focus:text-foreground"
              >
                Smartphone
              </SelectItem>
              <SelectItem 
                value="Tablette"
                className="hover:bg-primary/10 focus:bg-primary/10 focus:text-foreground"
              >
                Tablette
              </SelectItem>
              <SelectItem 
                value="Autre"
                className="hover:bg-primary/10 focus:bg-primary/10 focus:text-foreground"
              >
                Autre
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
