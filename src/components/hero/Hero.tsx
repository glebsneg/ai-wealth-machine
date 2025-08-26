import { dataHero } from "@/components/hero/hero.data";
import VideoCStartTimer from "@/components/video/VideoCStartTimer";
import HeroTimer from "./HeroTimer";

export default function Hero() {

  return (
    <section className="pt-6 md:pt-14 pb-7 xl:pb-10 px-4 lg:px-52 w-full font-at-chrome flex flex-col text-center items-center 
    bg-moving-columns animate-columns">
      <div className="relative w-full xl:w-1/2 mb-3 md:mb-4 rounded-[3.5rem] border border-orange-custom bg-background overflow-hidden p-0.5
      font-bold text-background text-lg">
        <div className="h-full bg-orange-custom w-[62%] rounded-[4.188rem] flex justify-end items-center pr-2.5">
          {dataHero.precentage}
        </div>
      </div>

      <h1 className="font-bold text-2xl md:text-5xl mb-3 md:mb-4 uppercase">{dataHero.title}</h1>
      <p className="text-base md:text-xl text-black/56 mb-4 md:mb-8">{dataHero.subtitleBottom}</p>
      <VideoCStartTimer
        dataVideoParameter={dataHero.video}
        placeholder="blur"
        fetchPriority="high"
        preload="none"
        priority
        aspectRatio="aspect-[1/1.23] md:aspect-video"
        className="aspect-[1/1.23] md:aspect-video 2xl:w-3/4 w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1536px) 60vw, 1200px" />
      <HeroTimer />
    </section>
  );
}