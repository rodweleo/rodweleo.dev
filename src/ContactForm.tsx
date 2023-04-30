import { Button } from "./MyButton";

export function ContactForm() {
  function handleClick() {
    alert("Thank you for your message.");
  }

  return (
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
      <Button type="Submit" value="Send Message" onclick={handleClick} />
    </form>
  );
}
