
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";
import { MessageSquare } from "lucide-react";

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
          <FormLabel className="text-gold flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Message (facultatif)</span>
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder="Votre message"
              className="bg-dark-light border-gold/30 text-gold resize-none hover:border-gold/60 transition-all"
              {...field}
            />
          </FormControl>
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
};

export default MessageField;
