"use client"
import { useState, useEffect } from "react"

import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { dataRevieTiktok } from "@/components/reviews-tiktok/reviewTiktok.data"
import VideoC from "@/components/video/VideoC"
import { IconCheckStar } from "@/components/Icons"
import CarouselDots from "@/components/ui/carouselDots"

export default function CarouselTikTok() {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return
        }
    }, [api])

    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                {dataRevieTiktok.reviewTiktokItems.map((reviewTiktokItem, index) => (
                    <CarouselItem key={reviewTiktokItem.name + index} className="pl-6 basis-[60%] md:basis-[40%] lg:basis-[30%] xl:basis-1/4 text-center">
                        <VideoC
                            sizes="(max-width: 767px) 50vw, (max-width: 1199px) 30vw, 300px"
                            pauseOnClick={true}
                            controls={false}
                            dataVideoParameter={reviewTiktokItem.video}
                            className="aspect-[0.7/1]"
                            aspectRatio="aspect-[0.7/1]"
                        />
                        <div className="font-paralucent font-normal pt-4 bg-gradient-to-r from-gold-custom-start to-gold-custom-end bg-clip-text text-transparent">
                            <p className="text-lg {dataRevieTiktok.by}">{reviewTiktokItem.name}</p>
                            <p className="flex justify-center items-center uppercase text-xs">
                                <span className="pr-1">{dataRevieTiktok.verified}</span>
                                <span className="-mt-0.5">
                                    <IconCheckStar size={17.5}
                                        startColor="var(--color-gold-custom-start)"
                                        stopColor="var(--color-gold-custom-end)"
                                    />
                                </span>
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-around pt-6 xl:hidden">
                <CarouselPrevious className="translate-y-0 static" />
                <CarouselDots className="lg:hidden" api={api} length={dataRevieTiktok.reviewTiktokItems.length} />
                <CarouselNext className="translate-y-0 static" />
            </div>
        </Carousel>
    )
}