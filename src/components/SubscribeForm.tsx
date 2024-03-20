import TextField from "./ui/TextField";
import { FieldValues, useForm } from "react-hook-form";

function SubscribeForm() {
  const { register } = useForm()

  const subscribe = (data: FieldValues) => {
    console.log(data)
  };
  return (
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
      <button className="px-8 py-2 rounded-md font-bold disabled:bg-slate-600 disabled:cursor-not-allowed" disabled>Subscribe</button>
    </form>
  );
}

export default SubscribeForm;
