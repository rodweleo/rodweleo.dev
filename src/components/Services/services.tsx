import Service from "../service";

const services = [
  {
    icon: "fa-solid fa-globe",
    title: "Web Programming",
    description:
      "Build quality web applications with the best technologies and optimization in search engines.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    description:
      "Create mobile applications meetings your needs for better professional business performance.",
  },
];

const serviceList = services.map((service) => (
  <Service props={{ service: service }} />
));
const Services = () => {
  return (
    <section className="mt-10 flex w-full justify-center gap-10 h-fit">
      {serviceList}
    </section>
  );
};

export default Services;
