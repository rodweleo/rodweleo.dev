import ServiceList from "./service_list";

const Services = () => {
  return (
    <section id="services" className="min-h-screen w-full flex flex-col items-center mt-20">
      <h2 className="text-white text-3xl font-bold">Services</h2>
      <p className="font-bold text-slate-500">Take a look at what I can offer:</p>
      <ServiceList />
    </section>
  );
};

export default Services;
