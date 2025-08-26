import { dataRevieTiktok } from "@/components/reviews-tiktok/reviewTiktok.data"
import CarouselTikTok from "@/components/reviews-tiktok/CarouselTikTok"
import CarouselMagazine, { BlockMagazine } from "@/components/reviews-tiktok/CarouselMagazine";

export default function ReviewsTiktok() {
  return (
    <section className="bg-[#100601] w-full font-at-chrome text-background overflow-hidden">
      <div className="px-4 md:px-40 pt-9 pb-19 md:py-14 flex flex-col gap-9">
        <h2 className="font-bold text-4xl md:text-[3.5rem] flex flex-col">
          <span>{dataRevieTiktok.title}</span>
          <span>{dataRevieTiktok.titleEnd}</span>
        </h2>

        <div className="w-screen -mx-4 md:-mx-40 xl:-mx-0 xl:w-full">
          <CarouselTikTok />
        </div>

        <div className="hidden lg:flex">
          <BlockMagazine />
        </div>
        <div className="lg:hidden w-screen -mx-4 md:-mx-40 xl:-mx-0 xl:w-full">
          <CarouselMagazine />
        </div>
      </div>
    </section>
  );
}
