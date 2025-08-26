import Image from 'next/image'
import clsx from 'clsx';

import { dataReview } from "@/components/reviews/review.data"
import CTAButton from "@/components/cta-button/CTAButton";
import { IconCheckStar } from "@/components/Icons";

const intlFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function mRRFormat(num: number): string {
  if (num >= 1_000) {
    return `$${(num / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return intlFormat.format(num);
}

export default function Reviews() {

  return (
    <section className="py-12 lg:p-14 px-4 lg:px-20 w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center 
      text-center uppercase font-at-chrome font-bold">
        <span className="text-orange-custom">{dataReview.subtitleTop}</span>
        <h2 className="text-[2rem] text-5xl flex flex-col">
          <span>{dataReview.title}</span>
          <span>{dataReview.titleEnd}</span>
        </h2>
      </div>

      <div className="py-9 flex flex-col xl:flex-row
      gap-x-0 gap-y-2 xl:gap-x-6 xl:gap-y-0">
        <ReviewItemCard />
      </div>


      <div className="flex justify-center">
        <CTAButton className="w-full md:w-100" />
      </div>

    </section>
  );
}

const ReviewItemCard = () => {
  return (
    <>
    {dataReview.reviewItems.map((reviewItem, i) => (
      <div key={reviewItem.name + i} className="p-8 rounded-2xl w-full
      border-[1px] border-foreground/12
      flex flex-col gap-4">
        <div className='flex flex-row'>
          <div className='relative w-12 h-12'>
            {Array.from({ length: 3 }, (_, j) => {
              return (
                <Image key={i.toString() + j.toString()} 
                src={dataReview.dollar.src} alt={dataReview.dollar.alt + " " + i + "_" + j}
                  width={24}
                  height={24}
                  sizes="24px"
                  className={clsx("absolute top-2 left-4",
                    j === 0 ? "rotate-20" : j === 1 ? "-translate-y-1" : "rotate-160 "
                  )} />
              )
            })}
          </div>
          <div className="ml-12 w-full
          font-rebrand font-bold text-2xl uppercase
          ">
            <span className="text-lg text-orange-custom/56">{dataReview.newRevenue}</span>
            <h3 className="text-3xl font-bold text-orange-custom">{mRRFormat(reviewItem.mrr)}{dataReview.perMonth}</h3>
          </div>
        </div>
        <p className="font-rebrand font-medium text-foreground/56">{reviewItem.review}</p>
        <div className="flex flex-row items-center font-rebrand font-semibold text-sm">
          <Image src={reviewItem.photo.src} alt={reviewItem.photo.alt + " " + i}
            width={48}
            height={48}
            sizes="48px"
            className='w-12 h-12 mr-3 rounded-full' />
          <span className="mr-2">{reviewItem.name}, {reviewItem.city}</span>
          <span><IconCheckStar startColor="var(--color-yellow-custom)" stopColor="var(--color-yellow-custom)" size={24} /></span>
        </div>
      </div>
    )
    )}
    </>
  )
}