import { Button } from "./MyButton";

export function ContactForm() {
  function handleClick() {
    const form = document.getElementById("contactForm");

  }

  return (
    <form className="contact_form" id="contactForm">
      <h3>Leave me a message</h3>
      <table>
        <tr>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value="Rodwell"
          />
        </tr>
        <tr>
          <label for="email">Email Address </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
          />
        </tr>
        <tr>
          <label for="number">Phone Number </label>
          <input
            type="tel"
            id="number"
            name="number"
            placeholder="Phone Number"
          />
        </tr>
        <tr>
          <label for="message">Message</label>
          <textarea id="message" placeholder="Message"></textarea>
        </tr>
      </table>
      <Button type="Submit" value="Send Message" onclick={handleClick} />
    </form>
  );
}
