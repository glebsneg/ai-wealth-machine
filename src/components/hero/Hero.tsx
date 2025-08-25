import { dataHero } from "@/components/hero/hero.data";
import VideoC from "@/components/video/Video";
import Timer from "@/components/timer/Timer";

export default function Hero() {

  return (
    <section className="pt-6 md:pt-14 pb-7 px-4 lg:px-52 w-full font-at-chrome flex flex-col text-center items-center">
      <div className="relative w-full lg:w-1/2 mb-3 md:mb-4 rounded-[3.5rem] border border-orange-custom overflow-hidden p-0.5
      font-bold text-background text-lg">
        <div className="h-full bg-orange-custom w-[62%] rounded-[4.188rem] flex justify-end items-center pr-2.5">
          {dataHero.precentage}
        </div>
      </div>

      <h1 className="font-bold text-2xl md:text-5xl mb-3 md:mb-4 uppercase">{dataHero.title}</h1>
      <p className="text-base md:text-xl text-black/56 mb-4 md:mb-8">{dataHero.subtitleBottom}</p>
      <VideoC dataVideoParameter={dataHero.video} />
      <div className="-m-7 xl:-m-14 bg-gradient-to-b from-[#FF0843] to-[#FF9A23] pb-9 xl:pt-20 pt-16 md:py-8 w-2/3 max-w-md">
        <Timer />
      </div>
    </section>
  );
}