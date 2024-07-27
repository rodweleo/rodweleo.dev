import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SubscribeForm = () => {
  const { register } = useForm()

  return (
    <form method="post" className="space-y-3 max-w-80">
        <h4 className="text-white font-bold text-xl">Subscribe to my Newsletter</h4>
        <Input {...register("email")}/>
        <Button>Subscribe</Button>
      </form>
  );
}
