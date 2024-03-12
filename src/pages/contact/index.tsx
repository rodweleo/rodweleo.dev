import ContactForm from "../../components/Contact Me/contact_form";

const ContactMe = () => {
    return (
        <section
            id="contact-me"
            className="h-screen flex flex-wrap w-full justify-center items-center space-x-40">
            <ContactForm />
            <ul className="space-y-4">
                <li className="flex items-center p-0 m-0 gap-2"><i className="fa-solid fa-phone p-2.5 border border-slate-500 rounded-md text-slate-500"></i>
                    <ul>
                        <li className="text-slate-500 text-sm font-bold">Phone Number</li>
                        <li className="font-bold text-slate-200">+254795565344</li>
                    </ul></li>
                <li className="gap-2 flex items-center p-0 m-0 justify-start"><i className="p-2.5 border border-slate-500 rounded-md fa-solid fa-envelope text-slate-500"></i>
                    <ul>
                        <li className="text-slate-500 text-sm font-bold">Email Address</li>
                        <li className="font-bold text-slate-200">leorodwel86@gmail.com</li>
                    </ul></li>
            </ul>
        </section>
    );
};

export default ContactMe;
