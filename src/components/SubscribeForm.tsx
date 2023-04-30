import emailjs from "@emailjs/browser";
import { useRef } from "react";
import emailAPI from "../utils/emailAPI";

function SubscribeForm() {
  const refSubscriber = useRef<HTMLFormElement>(null);

  const subscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const formData = refSubscriber.current?.value;

    emailjs.sendForm(
      emailAPI.USER_ID,
      "template_q8lsjbl",
      formData,
      "3wYIW4FWRr2CqzIyD"
    );
  };
  return (
    <form ref={refSubscriber} onSubmit={subscribe}>
      <h4>Subscribe to my Newsletter</h4>
      <input type="email" name="subscriber" placeholder="123@gmail.com" />
      <button style={{ margin: "5px" }}>Subscribe</button>
    </form>
  );
}

export default SubscribeForm;
