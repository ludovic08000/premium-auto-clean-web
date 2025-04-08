
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { ContactFormValues } from "@/schemas/contactFormSchema";

interface DateSelectorProps {
  form: UseFormReturn<ContactFormValues>;
}

const DateSelector = ({ form }: DateSelectorProps) => {
  return (
    <FormField
      control={form.control}
      name="date"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Date souhaitée</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] bg-dark border-gold/30 text-gold justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {field.value ? (
                    format(field.value, "dd MMMM yyyy", {
                      locale: fr,
                    })
                  ) : (
                    <span>Choisir une date</span>
                  )}
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 mt-5 bg-dark border-gold/30 text-gold" align="center" side="bottom">
              <Calendar
                mode="single"
                locale={fr}
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date < new Date() || date > new Date(new Date().setDate(new Date().getDate() + 30))
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default DateSelector;
