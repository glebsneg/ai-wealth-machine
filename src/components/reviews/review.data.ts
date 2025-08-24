import { IDataSection, Image } from "@/types/types"

type ReviewItem = {
    name: string;
    city: string;
    mrr: number;
    review: string;
    photo: Image;
}

interface IDataReview extends IDataSection {
    reviewItems: ReviewItem[];
}

export const dataReview: IDataReview = {
    title: "What our members are saying...",
    subtitleTop: "customer reviews",
    reviewItems: [
        {
            name: "Sarah M.",
            city: "Phoenix",
            mrr: 7.5,
            review: "Honestly thought this was too good to be true. But the AI store they built for me started generating sales within 2 weeks. The funding strategies alone paid for the course 10x over.",
            photo: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Marcus T.",
            city: "Dallas",
            mrr: 15,
            review: "My success manager connected me with business funding I didn't even know existed. Went from $0 to consistent 5-figure months. The done-for-you approach changed everything.",
            photo: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Jennifer L.",
            city: "Miami",
            mrr: 6,
            review: "I'm not tech-savvy at all, but they built everything for me. The AI handles most of the work while I focus on scaling. Wish I found this system years ago.",
            photo: {
                src: "",
                alt: ""
            }
        },
    ]
}