import { motion } from "framer-motion";
import ContactForm from "../../components/Contact Me/contact_form";

const ContactMe = () => {
    return (
        <section
            id="contact-me"
            className="min-h-screen flex flex-wrap w-full justify-center items-center gap-20">
            <motion.div
                initial={{ translateX: -50, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ type: "spring", duration: 0.25, stiffness: 75, damping: 5 }}
            >
                <ContactForm />
            </motion.div>
            <ul>
                <li className="gap-2 flex items-center justify-start"><i className="p-2.5 border border-slate-500 rounded-md fa-solid fa-envelope text-slate-500"></i>
                    <ul>
                        <li className="text-slate-500 text-sm font-bold">Email Address</li>
                        <li className="font-bold text-slate-200">leorodwel86@gmail.com</li>
                    </ul></li>
            </ul>
        </section>
    );
};

export default ContactMe;
