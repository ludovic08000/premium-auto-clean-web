
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";
import { heures } from "@/services/EmailService";

interface TimeSelectorProps {
  form: UseFormReturn<ContactFormValues>;
}

const TimeSelector = ({ form }: TimeSelectorProps) => {
  return (
    <FormField
      control={form.control}
      name="heure"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Heure souhaitée</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-dark border-gold/30 text-gold">
                <SelectValue placeholder="Sélectionner" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-dark border-gold/30 text-gold">
              {heures.map((heure) => (
                <SelectItem key={heure} value={heure}>
                  {heure}
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

export default TimeSelector;
