import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Main() {
  return (
    <main className="bg-backimage">
      <Image
        src="/nightsky.jpg"
        alt="Background Image"
        fill={true}
        className="h-screen w-screen -z-10 object-cover brightness-50 contrast-150"
      />
      {/* Hero */}
      <div className="container h-screen py-24 lg:py-32 flex items-center">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h2 className="scroll-m-20 text-3xl mb-8">Hello I&apos;m Atakan</h2>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              FRONTEND DEVELOPER
            </h1>
            <p className="mt-10 text-xl text-muted-foreground">
              Crafting seamless, user-friendly interfaces with a passion for
              modern web design and cutting-edge technologies. I specialize in
              transforming ideas into responsive, dynamic websites that deliver
              exceptional user experiences. Let&apos;s bring your vision to life
              on the web!
            </p>
            {/* Buttons */}
            <div className="mt-12 grid gap-3 w-full sm:inline-flex">
              <Button size={"lg"}>Let&apos;s get started</Button>
            </div>
            {/* End Buttons */}
            <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5"></div>
          </div>
          {/* Col */}
          <div className="relative ms-4">
            <Image
              className="w-full rounded-lg"
              src="maincartoon.svg"
              alt="Image Description"
              width={500}
              height={500}
            />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Hero */}
    </main>
  );
}