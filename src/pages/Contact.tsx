import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from 'emailjs-com';
import emailAPI from "../utils/emailAPI";
export default function Contact({onViewChange}: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const sendMessage = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    emailjs.send(
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


  //closing the form
  const handleClose = (status : boolean) =>{
    onViewChange(status)
  }

  return (

      
      <form className="contact_form" onSubmit={sendMessage}>
        <AiOutlineClose className='fa-x' onClick={()=>handleClose(false)}/>
        <h2>Let's talk</h2>
            <label htmlFor="name">
              Name
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
            </label>
          

            <label htmlFor="email">Email Address
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
            </label>
    
         
            <label htmlFor="number">
              Phone Number
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
             </label>
          
            <label htmlFor="message">Message
            <textarea
              id="message"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
              placeholder="Message"
            ></textarea>
            </label>
        <button type="submit">Send Message</button>
      </form>
  );
}
