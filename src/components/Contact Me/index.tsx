import ContactForm from "./contact_form";

const ContactMe = () => {
  return (
    <section
      id="contact-me"
      className="h-auto flex w-auto justify-center items-center place-content-center">
      <h1 className="text-white w-1/4">
        Want to get in touch? I'd love to hear from you
      </h1>
      <ContactForm />
    </section>
  );
};

export default ContactMe;
