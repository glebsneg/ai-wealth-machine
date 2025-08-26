import { IDataSection, TImage } from "@/types/types"
import dollar from "@/../public/images/reviews/dollar.webp"
import person_1 from "@/../public/images/reviews/person_1.webp"
import person_2 from "@/../public/images/reviews/person_2.webp"
import person_3 from "@/../public/images/reviews/person_3.webp"

type TReviewItem = {
    name: string;
    city: string;
    mrr: number;
    review: string;
    photo: TImage;
}

interface IDataReview extends IDataSection {
    titleEnd: string;
    reviewItems: TReviewItem[];
    dollar: TImage;
    newRevenue: string;
    perMonth: string;
}

export const dataReview: IDataReview = {
    title: "What our members",
    titleEnd: "are saying...",
    subtitleTop: "customer reviews",
    newRevenue: "New revenue:",
    perMonth: "/MONTH",
    dollar: {
        src: dollar,
        alt: "Photo of dollar"
    },
    reviewItems: [
        {
            name: "Sarah M.",
            city: "Phoenix",
            mrr: 7500,
            review: "Honestly thought this was too good to be true. But the AI store they built for me started generating sales within 2 weeks. The funding strategies alone paid for the course 10x over.",
            photo: {
                src: person_1,
                alt: "Photo of person"
            }
        },
        {
            name: "Marcus T.",
            city: "Dallas",
            mrr: 15000,
            review: "My success manager connected me with business funding I didn't even know existed. Went from $0 to consistent 5-figure months. The done-for-you approach changed everything.",
            photo: {
                src: person_2,
                alt: "Photo of person"
            }
        },
        {
            name: "Jennifer L.",
            city: "Miami",
            mrr: 6000,
            review: "I'm not tech-savvy at all, but they built everything for me. The AI handles most of the work while I focus on scaling. Wish I found this system years ago.",
            photo: {
                src: person_3,
                alt: "Photo of person"
            }
        },
    ],
}