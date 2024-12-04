"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
      className="snap-always snap-start container h-screen py-24 lg:py-32 flex flex-col items-center relative max-w-none w-screen"
    >
      <Image
        src="/mask.jpg"
        alt="Background Image"
        fill={true}
        className="absolute h-screen w-screen -z-10 object-contain object-center brightness-90 m-0 p-0 select-none bg-black"
      />
      <div className="grid grid-cols-1 grid-rows-[2rem,1fr] items-center self-center h-screen">
        <h1 className="text-3xl justify-self-center h-1">My Tech Stack</h1>
        <ul className="grid grid-cols-8 grid-rows-2 items-center justify-center self-end list-none gap-8">
          {logos.map((logo, index) => (
            <motion.li
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={{
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: logo.duration,
                  },
                },
                hover: {
                  scale: 1.3,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    duration: 0.3,
                  },
                },
                hidden: {
                  opacity: 0,
                  scale: 0,
                },
              }}
              className="select-none w-36"
            >
              <img src={logo.src} alt={logo.alt} className="fill-green-700" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
