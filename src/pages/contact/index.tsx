import ContactForm from "../../components/Contact Me/contact_form";
import { SocialLinks } from "../../components/social_links";
import SubscribeForm from "../../components/SubscribeForm";

const ContactMe = () => {
    return (
        <section
            id="contact-me"
            className="flex flex-col items-center gap-10 w-full">

            <div className="flex flex-wrap gap-10">
                <ContactForm />
                <div className="flex flex-col gap-10">
                    <SubscribeForm />
                    <div className="w-fit space-y-4">
                        <p className="text-slate-300 font-bold">
                            Follow for more:
                        </p>
                        <SocialLinks />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactMe;
