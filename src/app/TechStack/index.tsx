import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brand from "@fortawesome/free-brands-svg-icons";
export default function TechStack() {
  return (
    <section
      id="techstack"
      className="snap-always snap-start container h-screen py-24 lg:py-32 flex items-center relative max-w-none w-screen"
    >
      <Image
        src="/mask.jpg"
        alt="Background Image"
        fill={true}
        className="h-screen w-screen -z-10 object-contain object-center brightness-90 m-0 p-0 select-none bg-black"
      />
      <div className="container flex flex-col items-center justify-center">
        <h1 className="scroll-m-20 text-3xl mb-8">My Tech Stack</h1>
        <div className="grid grid-cols-12 grid-rows-1 gap-10 px">
          <FontAwesomeIcon icon={brand.faReact} />
          insert next.js icon here
          <FontAwesomeIcon icon={brand.faNodeJs} />
          insert express icon here
          <FontAwesomeIcon icon={brand.faJs} />, insert typescript icon here
          <FontAwesomeIcon icon={brand.faHtml5} />
          <FontAwesomeIcon icon={brand.faCss} />
          <FontAwesomeIcon icon={brand.faSass} />
          insert tailwindcss icon here
          <FontAwesomeIcon icon={brand.faBootstrap} />
          insert sql icon here
          <FontAwesomeIcon icon={brand.faDocker} />
          insert postgresql icon here
          <FontAwesomeIcon icon={brand.faLinux} />
          <FontAwesomeIcon icon={brand.faGitAlt} />
          <FontAwesomeIcon icon={brand.faCpanel} />
        </div>
      </div>
    </section>
  );
}
