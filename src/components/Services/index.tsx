import ServiceListItem from "./service_list_item";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      "icon": "fa-solid fa-laptop-code",
      "title": "Full Stack Development",
      "description": "I specialize in building end-to-end web applications, from front-end user interfaces, business logic to back-end server logic and database management. "
    }
    ,

    {
      "icon": "fa-solid fa-mobile",
      "title": "Mobile Development",
      "description": "I leverage the latest frameworks and technologies such as Flutter to build high-performance and user-friendly mobile applications. "
    }
    ,
    {
      "icon": "fa-solid fa-tools",
      "title": "DevOps Engineering",
      "description": "I implement automated processes, continuous integration/continuous deployment (CI/CD) pipelines, and infrastructure as code (IaC) to streamline development, testing, and deployment workflows."
    },
    {
      "icon": "fa-solid fa-cloud",
      "title": "Cloud Services",
      "description": "I provide comprehensive solutions tailored to your business needs, from selecting the right cloud provider to the implemention of scalable and cost-effective architectures while ensuring a smooth and efficient transition to the cloud."
    }
    ,
    {
      "icon": "fa-solid fa-shield-alt",
      "title": "Cyber Security Services",
      "description": "I offer comprehensive solutions to safeguard your organization's data, networks, and systems from cyber attacks and unauthorized access. "
    },
  ];



  return (
    <section id="services" className=" min-h-screen w-full flex flex-col items-center p-5">
      <h2 className="text-white text-3xl font-bold">Services</h2>
      <p className="font-bold text-slate-500">Take a look at what I can offer:</p>
      <div className="grid grid-cols-3 max-lg:flex max-lg:flex-wrap justify-center w-fit gap-10">
        {services.map((service, index: number) => (
          <motion.div
            initial={{ translateX: -50, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", duration: 0.5, stiffness: 50, damping: 5 }}
          >
            <ServiceListItem service={service} key={index} />
          </motion.div>

        ))}
      </div>
    </section>
  );
};

export default Services;
