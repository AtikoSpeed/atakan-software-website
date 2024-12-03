import Image from "next/image";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="snap-always snap-start container h-screen py-24 lg:py-32 flex flex-col items-center justify-center relative max-w-none w-screen"
    >
      <Image
        src="/mask.jpg"
        alt="Background Image"
        fill={true}
        className="h-screen w-screen -z-10 object-contain object-center brightness-90 m-0 p-0 select-none bg-black"
      />
      <h1 className="scroll-m-20 text-3xl mb-8">My Tech Stack</h1>
    </section>
  );
}
