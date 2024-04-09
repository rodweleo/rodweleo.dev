import TextField from "./ui/TextField";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

export const SubscribeForm = () => {
  const { register } = useForm()

  return (
    <form method="post" className="space-y-3 max-w-80">
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
      </form>
  );
}
