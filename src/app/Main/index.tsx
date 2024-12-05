"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { forwardRef } from "react";
import ScrollInto from "react-scroll-into-view";

const buttonForMotion = forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ ...props }, ref) => {
  return (
    <Button ref={ref} {...props} size={"icon"} className="rounded-full size-16">
      <ArrowDown />
    </Button>
  );
});

buttonForMotion.displayName = "ButtonForMotion"; // Add display name for React DevTools

const MotionButton = motion.create(buttonForMotion);

const logo = {
  duration: 0.5,
};

export default function Main() {
  return (
    <main
      id="homepage"
      className="relative snap-always snap-start h-screen max-w-none w-screen"
    >
      <Image
        src="/nightsky.jpg"
        alt="Background Image"
        fill={true}
        className="h-screen w-screen -z-10 object-cover brightness-50 contrast-150 m-0 p-0 select-none"
      />
      <div className="container h-screen py-24 lg:py-32 flex items-center">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <article>
            <h2 className="scroll-m-20 text-3xl mb-8">Hello I&apos;m Atakan</h2>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              FULL-STACK DEVELOPER
            </h1>
            <p className="mt-10 text-xl text-foreground">
              A passionate full-stack developer specializing in modern web
              technologies and cloud solutions.
              <br />
              <br />I craft robust, scalable applications using React, Next.js,
              Node.js, and PostgreSQL, backed by solid DevOps practices with
              Docker and Git. Let&apos;s turn your ideas into exceptional
              digital experiences!
            </p>
            <div className="mt-4 lg:mt-8 grid justify-end">
              <ScrollInto
                className="cursor-pointer select-none"
                selector="#portfolio"
              >
                <MotionButton
                  initial="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 11 }}
                />
              </ScrollInto>
            </div>
          </article>
          <div className="relative ms-4 select-none">
            <Image
              className="w-full"
              src="maincartoon.svg"
              alt="Image Description"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
