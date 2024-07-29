import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { FieldValues, useForm } from "react-hook-form";
import { useToast } from "./ui/use-toast";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import ClipLoader from "react-spinners/ClipLoader";

export const ContactMe = () => {
    const { register, handleSubmit, reset } = useForm()
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const formRef = useRef<HTMLFormElement | null>(null)

    function sendMessage(values: FieldValues){
        setIsLoading(true)

        if(formRef.current){
          const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, publicKey).then(() => {
            toast({
              description: `Hello ${values.name}, your message has been sent.`
            })
            reset()
          }).catch((error) => {
            console.log(error.text)
          }).finally(() => {
            setIsLoading(false)
          })

          }
    }

  return (
    <section
      id="contact-me"
      className="flex flex-col w-full min-h-screen justify-center items-center space-y-5 bg-slate-200"
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <p className="bg-slate-100 text-slate-800 font-semibold w-fit px-6 py-2 rounded-full">
          Have a project in mind or just want to say hello?{" "}
        </p>
        <h1 className="font-bold text-5xl">Get in Touch</h1>
        <p className="text-slate-500">
          Fill out the form below and I'll will get back to you as soon as
          possible.
        </p>
      </div>
      <form ref={formRef} className="space-y-4 w-[350px]" onSubmit={handleSubmit(sendMessage)}>
        <Label className="flex flex-col gap-2">
          Name
          <Input type="text" placeholder="Name" {...register("name", {
            required: true
          })} autoComplete="name"/>
        </Label>
        <Label className="flex flex-col gap-2">
          Email Address
          <Input type="email" placeholder="Email" {...register("email", {
            required: true
          })} autoComplete="email-address"/>
        </Label>
        <Label className="flex flex-col gap-2">
          Message
          <Textarea placeholder="Message" {...register("message", {
            required: true
          })} autoComplete="message"/>
        </Label>
        <Button type="submit" className="w-full flex items-center gap-1">
          {
            isLoading && <ClipLoader
            color="white"
            size={14}
            />
          }
          <span>Submit</span>
        </Button>
      </form>
    </section>
  );
};
