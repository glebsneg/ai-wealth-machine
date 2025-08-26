"use client"
import { useState, useEffect } from "react";
import clsx from "clsx";

import GradientWrapper from "@/components/gradient-card/GradientWrapper";
import { CarouselApi } from "@/components/ui/carousel";

export default function CarouselDots({ api, length, className }: { api: CarouselApi, length: number, className?: string }) {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCarouselIndex(api.selectedScrollSnap());
        };

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    useEffect(() => {
        setTotalItems(length);
    }, [length]);

    const scrollToIndex = (index: number) => {
        api?.scrollTo(index);
    };

    return (
        <div className={clsx("static flex justify-center items-center gap-2.5", className)}>
            {
                Array.from({ length: totalItems }).map((_, i) => {
                    const isCurrentIndex: boolean = carouselIndex === i;
                    return (
                        <GradientWrapper key={totalItems.toString() + i} asChild
                            bgGradientColorFrom={isCurrentIndex ? "rgba(253, 232, 124, 1)" : "rgba(255, 255, 255, 0.56)"}
                            bgGradientColorTo={isCurrentIndex ? "rgba(246, 193, 54, 1)" : "rgba(255, 255, 255, 0.56)"}
                        >
                            <button
                                key={i}
                                onClick={() => scrollToIndex(i)}
                                className={clsx("rounded-full",
                                    isCurrentIndex ? "w-4 h-4" : "w-2 h-2"
                                )}
                            />
                        </GradientWrapper>
                    )
                })
            }
        </div>
    )
}