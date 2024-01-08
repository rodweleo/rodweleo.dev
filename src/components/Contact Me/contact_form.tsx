import { LegacyRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const contactFormRef = useRef<HTMLFormElement | null>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  //function to cealr the form
  function clearForm() {
    setName("");
    setEmail("");
    setMessage("");
  }
  const sendEmail = () => {
    if (contactFormRef.current) {
      emailjs
        .sendForm(
          "service_wu040gu",
          "template_4u3hlko",
          contactFormRef.current,
          "3wYIW4FWRr2CqzIyD"
        )
        .then(
          (result) => {
            if (result.text === "OK") {
              clearForm();
              setIsSubmitting(false);
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === null || email === null || message === null) {
      return;
    }
    setIsSubmitting(true);
    sendEmail();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      ref={contactFormRef as LegacyRef<HTMLFormElement>}
      className="w-auto flex flex-col gap-2.5">
      <label className="text-white w-full">
        Name
        <input
          required
          type="text"
          className="text-black px-2 h-10 rounded-md outline-none focus:shadow-xl"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>

      <label className="text-white w-full">
        Email Address
        <input
          required
          type="email"
          className="text-black px-2 h-10 rounded-md outline-none focus:shadow-xl"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="text-white w-full">
        Message
        <textarea
          required
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="text-black px-2 h-24 rounded-md outline-none focus:shadow-xl"></textarea>
      </label>

      <button
        type="submit"
        className="w-fit bg-blue-500 px-5 py-2.5 rounded-md hover:bg-blue-700 text-white">
        {isSubmitting ? (
          "..."
        ) : (
          <>
            Send Message <i className="fa-solid fa-paper-plane"></i>
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
