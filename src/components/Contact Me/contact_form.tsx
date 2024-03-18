import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form"
import TextField from "../ui/TextField";

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
      className="w-auto flex flex-col gap-2.5">
      <h3 className="text-slate-400 font-bold">Reach Out</h3>
      <p className="text-white text-3xl font-bold">
        Let's Work Together
      </p>
      <div className="space-y-5">
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

        <button
          type="submit"
          disabled
          className=" disabled:bg-slate-700 disabled:text-slate-500 w-fit bg-blue-500 px-5 py-2.5 rounded-md hover:bg-blue-700 text-white mt-2.5">
          {isSubmitting ? (
            "..."
          ) : (
            <>
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
