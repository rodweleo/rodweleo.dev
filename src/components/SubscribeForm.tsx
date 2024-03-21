import TextField from "./ui/TextField";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "./ui/button";

function SubscribeForm() {
  const { register } = useForm()

  const subscribe = (data: FieldValues) => {
    console.log(data)
  };
  return (
    <>

      <form onSubmit={subscribe} className="space-y-3">
        <h4 className="text-white font-bold text-xl">Subscribe to my Newsletter</h4>
        <TextField options={{
          label: "Email Address",
          prefixIcon: "fa-solid fa-envelope",
          hintText: "abc@gmail.com",
          type: "email",
          register,
          name: "email"
        }} />
        <Button
          options={{
            variant: "primary",
            label: "Subscribe",
            type: "submit",
            disabled: true
          }}
        />
      </form></>
  );
}

export default SubscribeForm;
