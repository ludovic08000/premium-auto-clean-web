
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";
import { heures } from "@/services/ContactService";
import { Clock } from "lucide-react";

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
          <FormLabel className="text-gold flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Heure souhaitée</span>
          </FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="bg-dark-light border-gold/30 text-gold hover:border-gold/60 transition-all">
                <SelectValue placeholder="Sélectionner une heure" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-dark-light border-gold/30 text-gold max-h-60">
              {heures.map((heure) => (
                <SelectItem 
                  key={heure} 
                  value={heure}
                  className="hover:bg-gold/10 focus:bg-gold/10 focus:text-gold"
                >
                  {heure}
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

export default TimeSelector;
