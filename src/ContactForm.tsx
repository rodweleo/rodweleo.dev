import { Button } from "./MyButton";
import { AiOutlineSend } from "react-icons/ai";

export function ContactForm() {
  function handleClick() {
    alert("Thank you for your message.");
  }

  return (
    <>
      <div className="contact_form_header">
        <h5>CONTACT ME</h5>
        <h2>Let's talk</h2>
      </div>

      <form className="contact_form" id="contactForm">
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
        <Button type="Submit" onclick={handleClick} value="Send Message">
          <AiOutlineSend />
        </Button>
      </form>
    </>
  );
}
