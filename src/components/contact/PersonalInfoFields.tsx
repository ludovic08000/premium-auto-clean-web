
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";
import { User, Mail, Phone } from "lucide-react";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<ContactFormValues>;
}

const PersonalInfoFields = ({ form }: PersonalInfoFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={form.control}
        name="nom"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gold flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Nom</span>
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Votre nom"
                className="bg-dark-light border-gold/30 text-gold hover:border-gold/60 transition-all"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gold flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </FormLabel>
            <FormControl>
              <Input
                placeholder="votre@email.com"
                type="email"
                className="bg-dark-light border-gold/30 text-gold hover:border-gold/60 transition-all"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="telephone"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gold flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>Téléphone</span>
            </FormLabel>
            <FormControl>
              <Input
                placeholder="0600000000"
                type="tel"
                className="bg-dark-light border-gold/30 text-gold hover:border-gold/60 transition-all"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-red-400" />
          </FormItem>
        )}
      />
    </div>
  );
};

export default PersonalInfoFields;
