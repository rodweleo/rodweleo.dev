import { RequestAQuoteForm } from "@/components/request-a-quote-form";

export const RequestAQuotePage = () => {
  return (
    <main className="space-y-2.5 p-5">
      <section className="flex justify-center gap-10 ">
        <RequestAQuoteForm />
        <img src="https://img.freepik.com/premium-photo/home-office-desk-workspace-with-laptop-coffee-cup-blank-sheet-notebook-glasses-pen-green-plant-branch-ginger_408798-388.jpg?w=576" alt="Request a quote" className=" max-lg:hidden"/>
      </section>
    </main>
  );
};
