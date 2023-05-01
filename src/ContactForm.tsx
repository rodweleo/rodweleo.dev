import { useState } from "react";
import emailjs from "@emailjs/browser";
import emailAPI from "./utils/emailAPI";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    emailjs
      .send(
        emailAPI.USER_ID,
        emailAPI.TEMPLATE_ID,
        formData,
        "3wYIW4FWRr2CqzIyD"
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: { status: any; text: any }) => {
        console.log("SUCCESS", response.status, response.text);
        setFormData({ name: "", email: "", number: "", message: "" });
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

      <form className="contact_form" onSubmit={sendMessage}>
        <h3>Get in Touch</h3>
        <table>
          <tr>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              id="name"
              name="name"
              placeholder="Name"
            />
          </tr>
          <tr>
            <label htmlFor="email">Email Address </label>
            <input
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </tr>
          <tr>
            <label htmlFor="number">Phone Number </label>
            <input
              type="tel"
              onChange={(e) =>
                setFormData({ ...formData, number: e.target.value })
              }
              value={formData.number}
              id="number"
              name="number"
              placeholder="Phone Number"
            />
          </tr>
          <tr>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
              placeholder="Message"
            ></textarea>
          </tr>
        </table>
        <button type="submit">Send Message</button>
      </form>
    </>
  );
}
