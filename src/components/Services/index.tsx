import ServiceListItem from "./service_list_item";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      "icon": "fa-solid fa-paint-brush",
      "title": "UI/UX Design",
      "description": "Enhance your digital presence with my UI/UX design services. I specialize in creating intuitive and visually appealing user interfaces that prioritize user experience. From wireframing to prototyping, I utilize industry-standard tools and best practices to ensure your product delivers a seamless and delightful user journey. By understanding your users' needs and preferences, I design interfaces that are aesthetically pleasing and highly functional, resulting in increased user engagement and satisfaction."
    }
    ,
    {
      "icon": "fa-solid fa-laptop-code",
      "title": "Full Stack Development",
      "description": "Empower your digital presence with my full stack development services. I specialize in building end-to-end web applications, from front-end user interfaces to back-end server logic and database management. I ensure seamless integration and optimal performance across the entire application stack. I leverage the latest frameworks and best practices to deliver robust, scalable, and user-friendly solutions."
    }
    ,

    {
      "icon": "fa-solid fa-mobile",
      "title": "Mobile Development",
      "description": "Deliver exceptional mobile experiences with my mobile development services. Whether you need an Android or cross-platform solution, I leverage the latest frameworks and technologies to build high-performance, user-friendly mobile applications. From concept to deployment, I ensure your app meets the highest standards of functionality, usability, and performance, catering to the unique requirements of your target audience."
    }
    ,
    {
      "icon": "fa-solid fa-tools",
      "title": "DevOps Engineering",
      "description": "Optimize your software development lifecycle with my DevOps engineering expertise. I implement automated processes, continuous integration/continuous deployment (CI/CD) pipelines, and infrastructure as code (IaC) to streamline development, testing, and deployment workflows. By integrating development and operations seamlessly, I enhance collaboration, increase deployment frequency, and improve the overall efficiency and reliability of your software delivery."
    },
    {
      "icon": "fa-solid fa-cloud",
      "title": "Cloud Services",
      "description": "Leverage the power of cloud computing with my cloud services. Whether you're looking to migrate your infrastructure to the cloud, optimize existing cloud deployments, or develop cloud-native applications, I provide comprehensive solutions tailored to your business needs, from selecting the right cloud provider to the implemention of scalable and cost-effective architectures while ensuring a smooth and efficient transition to the cloud."
    }
    ,
    {
      "icon": "fa-solid fa-shield-alt",
      "title": "Cyber Security Services",
      "description": "Protect your digital assets and mitigate cyber threats with my cyber security services. I offer comprehensive solutions to safeguard your organization's data, networks, and systems from cyber attacks and unauthorized access. With expertise in threat intelligence, encryption, access control, and compliance standards, I conduct risk assessments and implement robust security measures to provide ongoing monitoring and incident response ensuring proactive and resilient security."
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
