import { RequestAQuoteSchema } from "@/utils/schemas";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const services = [
  {
    id: "Full-Stack Web Development",
    label: "Web App Development",
  },
  {
    id: "Cyber Security Services",
    label: "Cyber Security Services",
  },
  {
    id: "Cloud Services",
    label: "Cloud Services",
  },
  {
    id: "Mobile Development",
    label: "Mobile Development",
  },
  {
    id: "DevOps Engineering",
    label: "DevOps Engineering",
  },
  {
    id: "other",
    label: "Other",
  },
] as const;

export const RequestAQuoteForm = () => {
  const form = useForm<z.infer<typeof RequestAQuoteSchema>>({
    resolver: zodResolver(RequestAQuoteSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      services: ["Full-Stack Web Development"],
      description: "",
      message: "",
    },
  });

  const attachmentsRef = form.register("attachments")



  async function onSubmit(data: z.infer<typeof RequestAQuoteSchema>) {
    
      toast({
      title: "Quotation sent.",
      description: (
        <p>Hello <b>{data.firstName} {data.lastName}</b>, your quotation has been sent. Rodwell Leo will get back to you to discuss more. <br/>Thank you for taking your time.</p>
      ),
    });
    
  }
  return (
    <section className="space-y-2.5 max-w-[500px]">
      <header className="flex flex-col">
        <p className="bg-slate-100/50 text-slate-800 font-semibold w-fit px-6 py-2 rounded-full">
          Have a project in mind or just want to say hello?{" "}
        </p>
        <h1 className="font-bold text-5xl">Get in Touch</h1>
        <p className="text-slate-500">
          I'm here to help. Have a chat 24/7 and get set up and ready to go in
          just 5 minutes.
        </p>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex justify-between gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-left">
                  Phone Number <em>(optional)</em>
                </FormLabel>
                <FormControl className="w-full">
                  <Input type="tel" {...field} placeholder="##########" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="abc@example.com"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="services"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Services</FormLabel>
                  <FormDescription>
                    Select the services you'd want us to work on.
                  </FormDescription>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {services.map((service) => (
                    <FormField
                      key={service.id}
                      control={form.control}
                      name="services"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={service.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(service.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value ?? []),
                                        service.id,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== service.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {service.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="attachments"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Attachments <em>(optional)</em>
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    {...attachmentsRef}
                    onChange={(event) => {
                      field.onChange(event.target?.files?.[0] ?? undefined);
                    }}
                  />
                </FormControl>
                <FormDescription>You can attach up to 5 files (images, documents, etc.).</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Provide more information about the project."
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Message <em>(optional)</em>
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Leave me a message."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled>
            Submit Request
          </Button>
        </form>
      </Form>
    </section>
  );
};
