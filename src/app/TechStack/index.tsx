"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TestimonialTooltip } from "../Tooltip";

const logos = [
  { src: "logos/react.svg", alt: "React", duration: 0.2 },
  { src: "logos/nextjs.svg", alt: "Next.js", duration: 0.25 },
  { src: "logos/node-js.svg", alt: "Node.js", duration: 0.3 },
  { src: "logos/express.svg", alt: "Express", duration: 0.35 },
  { src: "logos/js.svg", alt: "JavaScript", duration: 0.4 },
  { src: "logos/html5.svg", alt: "HTML5", duration: 0.45 },
  { src: "logos/css.svg", alt: "CSS", duration: 0.5 },
  { src: "logos/sass.svg", alt: "Sass", duration: 0.55 },
  { src: "logos/tailwind.svg", alt: "Tailwind CSS", duration: 0.6 },
  { src: "logos/bootstrap.svg", alt: "Bootstrap", duration: 0.65 },
  { src: "logos/database.svg", alt: "Database", duration: 0.7 },
  { src: "logos/docker.svg", alt: "Docker", duration: 0.75 },
  { src: "logos/postgresql.svg", alt: "PostgreSQL", duration: 0.8 },
  { src: "logos/linux.svg", alt: "Linux", duration: 0.85 },
  { src: "logos/git-alt.svg", alt: "Git", duration: 0.9 },
  { src: "logos/cpanel.svg", alt: "cPanel", duration: 1 },
];

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
        <ul className="grid grid-cols-8 grid-rows-2 items-center justify-center list-none gap-8">
          {logos.map((logo, index) => (
            <motion.li
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: logo.duration }}
              exit={{ opacity: 0, scale: 0 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className="select-none"
            >
              <img src={logo.src} alt={logo.alt} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
