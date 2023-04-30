import { useRef } from "react";
import emailjs from "@emailjs/browser";
import emailAPI from "./utils/emailAPI";

export function ContactForm() {
  const refForm = useRef<HTMLFormElement>(null);

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formData = refForm.current?.value;

    emailjs
      .sendForm(
        emailAPI.USER_ID,
        emailAPI.TEMPLATE_ID,
        formData,
        "3wYIW4FWRr2CqzIyD"
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: { status: any; text: any }) => {
        console.log("SUCCESS", response.status, response.text);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        console.log("FAILURE", err);
      });
  };

  return (
    <>
      <div className="contact_form_header">
        <h5>CONTACT ME</h5>
        <h2>Let's talk</h2>
      </div>

      <form ref={refForm} className="contact_form" onSubmit={sendMessage}>
        <h3>Get in Touch</h3>
        <table>
          <tr>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </tr>
          <tr>
            <label htmlFor="email">Email Address </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </tr>
          <tr>
            <label htmlFor="number">Phone Number </label>
            <input
              type="tel"
              id="number"
              name="number"
              placeholder="Phone Number"
            />
          </tr>
          <tr>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Message"></textarea>
          </tr>
        </table>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
}
