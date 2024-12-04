"use client";
import { logos } from "./logos";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Contact() {
  return (
    <section
      id="contact"
      className="snap-always snap-start container h-screen py-24 lg:py-32 flex flex-col items-center relative max-w-none w-screen"
    >
      <Image
        src="/contattami.jpg"
        alt="Background Image"
        fill={true}
        className="absolute h-screen -z-10 object-cover object-top brightness-[0.6] contrast-[1.08] m-0 p-0 select-none"
      />
      <div className="grid grid-cols-1 grid-rows-[2rem,1fr] items-center self-center h-screen">
        <h1 className="text-3xl justify-self-center h-1">Contact</h1>
        <ul className="grid grid-cols-6 grid-rows-1 items-center justify-center self-center list-none gap-8">
          {logos.map((logo, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <motion.li
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  exit="hover"
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
                  className="select-none min-w-36"
                >
                  <img src={logo.src} alt={logo.alt} />
                </motion.li>
              </PopoverTrigger>
              <PopoverContent
                side="top"
                className="flex justify-center align-middle mb-1 size-min min-w-36"
              >
                <p>{logo.popover}</p>
              </PopoverContent>
            </Popover>
          ))}
        </ul>
      </div>
    </section>
  );
}
