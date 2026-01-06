
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
          <FormLabel>Type d'appareil</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Choisir..." />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="PC Fixe">Ordinateur fixe</SelectItem>
              <SelectItem value="PC Portable">PC Portable</SelectItem>
              <SelectItem value="Mac">Mac / MacBook</SelectItem>
              <SelectItem value="iPhone">iPhone</SelectItem>
              <SelectItem value="iPad">iPad</SelectItem>
              <SelectItem value="Autre">Autre</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default VehicleSelector;
