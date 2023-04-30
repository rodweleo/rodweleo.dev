import { useRef } from "react";
import emailjs from "@emailjs/browser";
import emailAPI from "./utils/emailAPI";

export function ContactForm() {
  const contact_form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        emailAPI.USER_ID,
        emailAPI.TEMPLATE_ID,
        contact_form.current,
        "3wYIW4FWRr2CqzIyD"
      )
      .then((response) => {
        console.log("SUCCESS", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILURE", err);
      });
  };

  return (
    <>
      <div className="contact_form_header">
        <h5>CONTACT ME</h5>
        <h2>Let's talk</h2>
      </div>

      <form
        ref={contact_form}
        className="contact_form"
        id="contactForm"
        onSubmit={sendMessage}
      >
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
