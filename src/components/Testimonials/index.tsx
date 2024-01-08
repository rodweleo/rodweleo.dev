import Testimonial from "./testimonial";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    testimonial:
      "Working with Rodwell Leo has been a game-changer for our team. Their expertise in software development and problem-solving skills have significantly contributed to the success of our projects. Rodwell Leo is a true professional and a pleasure to work with.",
    avatar: "https://mighty.tools/mockmind-api/content/human/7.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    company: "InnovateTech",
    testimonial:
      "I had the pleasure of collaborating with Rodwell Leo on a critical project. Their attention to detail, clear communication, and ability to meet tight deadlines were impressive. Rodwell Leo is a reliable and talented software engineer.",
    avatar: "https://mighty.tools/mockmind-api/content/human/40.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    position: "CTO",
    company: "Tech Innovators Co.",
    testimonial:
      "We hired Rodwell Leo to lead the development of a complex software system. Their technical skills, leadership, and commitment to excellence have exceeded our expectations. Rodwell Leo is an invaluable asset to any team.",
    avatar: "https://mighty.tools/mockmind-api/content/human/75.jpg",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "UX/UI Designer",
    company: "DesignCraft Studio",
    testimonial:
      "Rodwell Leo is not only a brilliant software engineer but also a great team player. They seamlessly integrated with our design team, contributing valuable insights and ensuring a smooth collaboration. I highly recommend Rodwell Leo for any development project.",
    avatar: "https://mighty.tools/mockmind-api/content/human/26.jpg",
  },
  {
    id: 5,
    name: "Michael Thompson",
    position: "CEO",
    company: "Strategic Solutions LLC",
    testimonial:
      "We brought Rodwell Leo on board for a critical software upgrade. Their technical expertise, problem-solving skills, and commitment to delivering high-quality solutions were evident throughout the project. Rodwell Leo is a reliable and skilled software engineer.",
    avatar: "https://mighty.tools/mockmind-api/content/human/39.jpg",
  },
];

const testimonialList = testimonials.map((testimonial) => (
  <Testimonial props={{ testimonial: testimonial }} />
));

const Testimonials = () => {
  return (
    <section className="h-screen w-full relative">
      <h2>Testimonials</h2>
      <section className="flex p-20 overflow-x-auto gap-2 justify-between w-full ">
        {testimonialList}
      </section>
    </section>
  );
};

export default Testimonials;
