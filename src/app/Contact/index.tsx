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
      <h1 className="scroll-m-20 text-3xl mb-8">Contact</h1>
    </section>
  );
}
