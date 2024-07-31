import { RequestAQuoteForm } from "../request-a-quote-form";

export const RequestAQuote = () => {
  return (
    <main className="p-2.5">
      <div className="flex flex-col space-y-2">
        <p className="bg-slate-100/50 text-slate-800 font-semibold w-fit px-6 py-2 rounded-full">
          Have a project in mind or just want to say hello?{" "}
        </p>
        <h1 className="font-bold text-5xl">Get in Touch</h1>
        <p className="text-slate-500">
          I'm here to help. Have a chat 24/7 and get set up and ready to go in
          just 5 minutes.
        </p>
      </div>
      <RequestAQuoteForm />
    </main>
  );
};
