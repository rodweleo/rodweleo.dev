import ServiceListItem from "./service_list_item";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: "fa-solid fa-paint-brush",
      title: "UI/UX Design",
      description:
        "Elevate your digital presence with my UI/UX design services. From wireframing to prototyping, I craft intuitive and visually appealing user interfaces that enhance user experience. Utilizing industry-standard tools and best practices, I ensure your product delivers a seamless and delightful user journey."
    },
    {
      icon: "fa-solid fa-laptop-code",
      title: "Full-Stack Development",
      description:
        "Get end-to-end development expertise with my full-stack development services utilizing frontend technologies like HTML, CSS, JavaScript and ReactJS, backend technologies such as Node.js (ExpressJS), and databases like MongoDB, MySQL, and Firebase I am proficient in the entire stack. ",
    },

    {
      icon: "fa-solid fa-mobile-alt",
      title: "Mobile App Development",
      description:
        "My mobile app development services cater to both iOS and Android platforms, offering sleek and intuitive applications that engage users and meet your business objectives. Whether you're launching a new app or upgrading an existing one, I ensure a seamless and responsive user experience from design to deployment.",
    },
    {
      icon: "fa-solid fa-cloud",
      title: "Cloud Computing Solutions",
      description:
        "I design and implement cloud-native solutions that align with your business goals. Whether you're migrating existing applications or building new ones, I leverage platforms like AWS and Google Cloud to optimize performance, enhance security, and reduce operational costs. ",
    },
    {
      icon: "fa-solid fa-shield-alt",
      title: "Cybersecurity Services",
      description:
        "I implement robust security measures to safeguard your applications and data. From conducting security assessments to implementing encryption, authentication, and authorization protocols, I prioritize the integrity and confidentiality of your systems, ensuring compliance with industry standards and regulations",
    },
  ];



  return (
    <section id="services" className="min-h-screen w-full flex flex-col items-center mt-20">
      <h2 className="text-white text-3xl font-bold">Services</h2>
      <p className="font-bold text-slate-500">Take a look at what I can offer:</p>
      <div className="flex flex-wrap justify-center w-fit gap-5">
        {services.map((service, index: number) => (
          <motion.div
            initial={{ translateX: -50, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
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
