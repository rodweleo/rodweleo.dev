import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const { register, handleSubmit } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (data: FieldValues) => {
    console.log(data)
  };
  const sendMessage = (data: FieldValues) => {
    setIsSubmitting(true);
    sendEmail(data);
  };

  return (
    <form
      onSubmit={handleSubmit(sendMessage)}
      className="flex flex-col space-y-3 w-fit">
      <h3 className="text-slate-400 font-bold text-2xl">Reach Out</h3>
      <p className="text-white text-3xl font-bold">
        Let's Work Together
      </p>
      <div className="flex flex-col space-y-4">
        <Input {...register("name")}/>

        <Input {...register("email")}/>

        <Textarea {...register("message")}/>

      </div>
      <Button>Send message</Button>
    </form>
  );
};

export default ContactForm;
