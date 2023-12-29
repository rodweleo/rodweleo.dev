import ContactForm from "./contact_form";

const ContactMe = () => {
  return (
    <section id="contact-me" className="p-20 flex w-full justify-between ">
      <div className="w-2/4">
        <h3 className="text-3xl text-white/70">
          Let's Hire Me and Make The Best Product
        </h3>
        <p className="text-white/50 text-lg">
          Want to get in touch? I'd love to hear from you
        </p>
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactMe;
