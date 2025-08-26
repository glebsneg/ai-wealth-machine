import { FC, ReactNode } from "react"

import { IDataSection, Video } from "@/types/types"
import reviewsTiktok_1 from "@/../public/images/reviews-tiktok/reviews-tiktok-1.webp"
import reviewsTiktok_2 from "@/../public/images/reviews-tiktok/reviews-tiktok-2.webp"
import reviewsTiktok_3 from "@/../public/images/reviews-tiktok/reviews-tiktok-3.webp"
import reviewsTiktok_4 from "@/../public/images/reviews-tiktok/reviews-tiktok-4.webp"
import { IconBloomberg, IconForbes, IconSvgProps, IconTC } from "@/components/Icons"

type ReviewTiktokItem = {
    name: string;
    video: Video;
}

export type ReviewMagazineItem = {
    logo: {
        src: FC<IconSvgProps>;
        alt: string;
    };
    text: ReactNode;
}


interface IDataReviewTiktok extends IDataSection {
    titleEnd: string;
    verified: string;
    by: string;
    reviewTiktokItems: ReviewTiktokItem[];
    reviewMagazineItems: ReviewMagazineItem[];
}

export const dataRevieTiktok: IDataReviewTiktok = {
    title: "We made them",
    titleEnd: "talk about us....",
    verified: "Verified Celebrity",
    by: "By",
    reviewTiktokItems: [
        {
            name: "Adam Sandler",
            video: {
                src: "/videos/hero/mobile.mp4",
                srcMobile: "/videos/hero/mobile.mp4",
                poster: {
                    src: reviewsTiktok_1,
                    alt: "reviewsTiktok_1"
                }
            }
        },
        {
            name: "Jordan Peterson",
            video: {
                src: "/videos/hero/mobile.mp4",
                srcMobile: "/videos/hero/mobile.mp4",
                poster: {
                    src: reviewsTiktok_2,
                    alt: "reviewsTiktok_2"
                }
            }
        },
        {
            name: "Elon Musk",
            video: {
                src: "/videos/hero/mobile.mp4",
                srcMobile: "/videos/hero/mobile.mp4",
                poster: {
                    src: reviewsTiktok_3,
                    alt: "reviewsTiktok_3"
                }
            }
        },
        {
            name: "\"THE ROCK\"",
            video: {
                src: "/videos/hero/mobile.mp4",
                srcMobile: "/videos/hero/mobile.mp4",
                poster: {
                    src: reviewsTiktok_4,
                    alt: "reviewsTiktok_4"
                }
            }
        },
    ],
    reviewMagazineItems: [
        {
            logo: {
                src: IconForbes,
                alt: "Forbes logo"
            },
            text: <p>
                “AI Wealth Machine is redefining how everyday people launch{" "}
                <span className="font-bold text-background">online income streams</span>
                —with no code, no product, and no prior experience”
            </p>,
        },
        {
            logo: {
                src: IconTC,
                alt: "TC logo"
            },
            text: <p>
                “One of the few platforms using artificial intelligence not for novelty—but for real,{" "}
                <span className="font-bold text-background">automated business creation</span>”
            </p>
        },
        {
            logo: {
                src: IconBloomberg,
                alt: "Bloomberg logo"
            },
            text:
                <p>
                    “AI Wealth Machine isn’t about chasing trends—it’s quietly powering a{" "}
                    <span className="font-bold text-background">new kind of entrepreneurship</span> that{" "}
                    <span className="font-bold text-background">runs in the background</span>”
                </p>
        },
    ],
}