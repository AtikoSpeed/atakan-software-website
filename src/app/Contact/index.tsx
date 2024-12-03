import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brand from "@fortawesome/free-brands-svg-icons";
import * as solid from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-always snap-start container h-screen py-24 lg:py-32 flex flex-col items-center justify-center relative max-w-none w-screen"
    >
      <Image
        src="/contattami.jpg"
        alt="Background Image"
        fill={true}
        className="absolute h-screen -z-10 object-cover object-top brightness-[0.6] contrast-[1.08] m-0 p-0 select-none opacity-100"
      />
      <div className="container flex flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-3xl mb-8">Contact</h1>
        <div className="grid grid-cols-6 grid-rows-1 gap-10 items-center justify-center">
          <FontAwesomeIcon icon={solid.faPhone} className="text-[#b0f]" />
          <FontAwesomeIcon icon={brand.faWhatsapp} />
          <FontAwesomeIcon icon={brand.faLinkedinIn} />
          <FontAwesomeIcon icon={brand.faGithub} />
          <FontAwesomeIcon icon={brand.faDiscord} />
          <FontAwesomeIcon icon={solid.faEnvelope} />
          holdatore place
        </div>
      </div>
    </section>
  );
}
