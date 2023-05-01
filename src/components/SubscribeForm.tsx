import emailjs from "@emailjs/browser";
import { useState } from "react";
import emailAPI from "../utils/emailAPI";

function SubscribeForm() {
  const [formData, setSubscriber] = useState({
    email: "",
  });

  const subscribe = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(emailAPI.USER_ID, "template_q8lsjbl", formData, "3wYIW4FWRr2CqzIyD")
      .then((response: { status: number; text: string }) => {
        console.log(response.status, response.text);
        setSubscriber({ email: "" });
      });
  };
  return (
    <form onSubmit={subscribe}>
      <h4>Subscribe to my Newsletter</h4>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setSubscriber({ ...formData, email: e.target.value })}
        name="subscriber"
        placeholder="123@gmail.com"
      />
      <button style={{ margin: "5px" }}>Subscribe</button>
    </form>
  );
}

export default SubscribeForm;
