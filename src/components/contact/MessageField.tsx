
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";

interface MessageFieldProps {
  form: UseFormReturn<ContactFormValues>;
}

const MessageField = ({ form }: MessageFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="message"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Message (facultatif)</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Votre message"
              className="bg-dark border-gold/30 text-gold resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default MessageField;
