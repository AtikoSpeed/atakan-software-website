import Image from "next/image";
import PortfolioSwiper from "./PortfolioSwiper";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="snap-always snap-start container h-screen py-24 lg:py-32 flex flex-col items-center justify-center relative max-w-none w-screen"
    >
      <Image
        src="/nightskycolorful.jpg"
        alt="Background Image"
        fill={true}
        className="h-screen w-screen -z-10 object-cover brightness-50 contrast-150 m-0 p-0 select-none rotate-180 opacity-100"
      />
      <h1 className="scroll-m-20 text-3xl mb-8">My Portfolio</h1>
      <PortfolioSwiper />
    </section>
  );
}
