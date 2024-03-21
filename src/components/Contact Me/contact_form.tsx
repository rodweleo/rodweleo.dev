import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form"
import TextField from "../ui/TextField";
import { Button } from "../ui/button";

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
      className="flex flex-col space-y-3">
      <h3 className="text-slate-400 font-bold">Reach Out</h3>
      <p className="text-white text-3xl font-bold">
        Let's Work Together
      </p>
      <div className="flex flex-col space-y-4">
        <TextField
          options={{
            label: "Name",
            register,
            type: "text",
            hintText: "John Doe",
            prefixIcon: "fa-solid fa-user"
          }}
        />

        <TextField
          options={{
            label: "Email Address",
            register,
            type: "email",
            hintText: "johndoe@gmail.com",
            prefixIcon: "fa-solid fa-envelope"
          }}
        />

        <TextField
          options={{
            label: "Message",
            register,
            type: "textarea",
            hintText: "Hello there, awesome work!",
            prefixIcon: "fa-solid fa-message"
          }}
        />

      </div>
      <Button
        options={{
          variant: "primary",
          label: isSubmitting ? "..." : "Send Message",
          type: "submit",
          disabled: true,
        }}
      />
    </form>
  );
};

export default ContactForm;
