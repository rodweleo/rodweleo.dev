import Service from "../service";

const services = [
  {
    icon: "fa-solid fa-globe",
    title: "Full-Stack Development",
    description:
      "Get end-to-end development expertise with my full-stack development services utilizing frontend technologies like HTML, CSS, JavaScript and ReactJS, backend technologies such as Node.js (ExpressJS), and databases like MongoDB, MySQL, and Firebase I am proficient in the entire stack. ",
  },

  {
    icon: "fa-solid fa-mobile-screen-button",
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
    icon: "fa-solid fa-shield-halved",
    title: "Cybersecurity Services",
    description:
      "I implement robust security measures to safeguard your applications and data. From conducting security assessments to implementing encryption, authentication, and authorization protocols, I prioritize the integrity and confidentiality of your systems, ensuring compliance with industry standards and regulations",
  },
];

const serviceList = services.map((service) => (
  <Service props={{ service: service }} />
));
const Services = () => {
  return (
    <div className="flex flex-wrap w-full justify-between items-center">
      {serviceList}
    </div>
  );
};

export default Services;
