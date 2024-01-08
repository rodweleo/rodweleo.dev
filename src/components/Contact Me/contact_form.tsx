import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values: any) => console.log(values);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-2/4 flex flex-col  gap-2.5">
      <label className="text-white w-full">
        Name
        <input
          type="text"
          className="text-black px-2 h-10 rounded-md outline-none focus:shadow-xl"
          {...register("name", { required: true })}
        />
      </label>
      {errors.name && <span>Name is required</span>}

      <label className="text-white w-full">
        Email Address
        <input
          type="email"
          className="text-black px-2 h-10 rounded-md outline-none focus:shadow-xl"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </label>
      {errors.email && <span>Valid email is required</span>}

      <label className="text-white w-full">
        Message
        <textarea
          {...register("message", { required: true })}
          className="text-black px-2 h-24 rounded-md outline-none focus:shadow-xl"></textarea>
      </label>
      {errors.message && <span>Message is required</span>}

      <button
        type="submit"
        className="w-fit bg-blue-500 px-5 py-2.5 rounded-md hover:bg-blue-700 text-white">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
