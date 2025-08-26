"use client"
import clsx from "clsx"
import { useState, useEffect } from "react"

import { CarouselApi, Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { dataRevieTiktok, TReviewMagazineItem } from "@/components/reviews-tiktok/reviewTiktok.data"
import GradientWrapper from "@/components/gradient-card/GradientWrapper"
import CarouselDots from "@/components/ui/carouselDots"
import { TProps } from "@/types/types"

export default function CarouselMagazine() {
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            return
        }
    }, [api])
    return (
        <Carousel setApi={setApi}>
            <CarouselContent>
                {dataRevieTiktok.reviewMagazineItems.map((reviewMagazineItem, index) => {
                    return (
                        <CarouselItem key={reviewMagazineItem.logo.alt + index} className="basis-full flex items-center justify-center">
                            <Wrapper className_1="max-w-96 md:max-w-xl" className="w-full rounded-2xl">
                                <DataMagazine className="pt-6 pb-12" reviewMagazineItem={reviewMagazineItem} />
                            </Wrapper>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>
            <div className="-mt-10 flex justify-around xl:hidden">
                <CarouselDots api={api} length={dataRevieTiktok.reviewMagazineItems.length} />
            </div>
        </Carousel>
    )
}

export function BlockMagazine() {
    return (
        <Wrapper className="flex gap-6 rounded-2xl" className_2="p-8">
            {dataRevieTiktok.reviewMagazineItems.map((reviewMagazineItem, i) => (
                <DataMagazine key={reviewMagazineItem.logo.alt + i} reviewMagazineItem={reviewMagazineItem} />
            ))}
        </Wrapper>
    )
}

function DataMagazine({
    reviewMagazineItem,
    className = ""
}: { reviewMagazineItem: TReviewMagazineItem } & TProps) {
    const Logo = reviewMagazineItem.logo.src;
    return (
        <div key={reviewMagazineItem.logo.alt} className={clsx("flex flex-col justify-top items-center text-center gap-3", className)}>
            <Logo startColor="#FDE87C" stopColor="#F7C136" aria-label={reviewMagazineItem.logo.alt} />
            <span className="font-medium text-lg text-background/64">{reviewMagazineItem.text}</span>
        </div>
    )
}

function Wrapper({
    children,
    className_1,
    className_2,
    className
}: Readonly<{
    children: React.ReactNode;
    className_1?: string;
    className_2?: string;
    className: string;
}>) {
    return (
        <GradientWrapper
            bgGradient_deg="-47deg"
            bgGradientColorFrom="rgba(0, 0, 0, 0)"
            bgGradientColorVia="rgba(254, 194, 1, 0.1)"
            bgGradientColorTo="rgba(0, 0, 0, 0)"
            bgGradientVia="48%"
            className={className + " " + className_1}
        >
            <GradientWrapper
                bgGradient_deg="80deg"
                bgGradientColorFrom="rgba(255, 244, 205, 0.12)"
                bgGradientColorTo="rgba(255, 213, 64, 0.12)"
                bgGradientFrom="48%"

                gradient_deg_1="80deg"
                gradientColorFrom_1="rgba(255, 244, 205, 0)"
                gradientColorTo_1="rgba(255, 213, 64, 0.24)"
                gradientFrom_1="48%"

                gradient_deg_2="80deg"
                gradientColorFrom_2="rgba(255, 244, 205, 0.24)"
                gradientColorTo_2="rgba(255, 213, 64, 0.24)"
                gradientFrom_2="48%"

                strokeWidthPx={1}
                className={className + " " + className_2}
            >
                {children}
            </GradientWrapper>
        </GradientWrapper>
    )
}