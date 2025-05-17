import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Form from "../components/Form";
import Title from "../components/Title";

function Contact() {
  return (
    <section id="contact" className="pt-36">
      <div className="container">
        <Title
          title="contact"
          highlight="me"
          subtitle="Get in touch with me."
          isCenter={false}
        />

        <div className="md:grid md:grid-cols-2 md:gap-16 ">
          <Form />

          <div className="mb-16 mt-8">
            <div className="mb-2 flex flex-wrap items-center justify-start gap-2">
              <Phone className="size-5" />
              <a
                className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600"
                href="tel: 9130839479"
              >
                9130839479
              </a>
            </div>

            <div className="mb-4 flex flex-wrap items-center justify-start gap-2">
              <Mail className="size-5" />
              <a
                className="text-lg font-semibold transition-colors duration-300 hover:text-blue-600"
                href="mailto:channawarpiyush@gmail.com"
              >
                channawarpiyush@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-4 ">
             <a className="hover:translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out" href="https://www.linkedin.com/in/piyush-channawar-a75246268/" target="_blank">
                <Linkedin className="size-6" />
             </a>

             <a className="hover:translate-y-2 hover:text-blue-600 transition-all duration-300 ease-in-out" href="https://github.com/Piyushchannawar" target="_blank">
                <Github className="size-6" />
             </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
