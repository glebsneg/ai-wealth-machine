import { DataSection, Image, Video } from "@/types/types"

type ReviewTiktokItem = {
    name: string;
    video: Video;
}

type ReviewMagazineItem = {
    logo: Image;
    text: string;
}


interface DataReviewTiktok extends DataSection {
    reviewTiktokItems: ReviewTiktokItem[];
    reviewMagazineItems: ReviewMagazineItem[];
}

export const dataRevieTiktok: DataReviewTiktok = {
    title: "We made them talk about us....",
    reviewTiktokItems: [
        {
            name: "Adam Sandler",
            video: {
                src: "",
                poster: "",
                alt: ""
            }
        },
        {
            name: "Jordan Peterson",
            video: {
                src: "",
                poster: "",
                alt: ""
            }
        },
        {
            name: "Elon Musk",
            video: {
                src: "",
                poster: "",
                alt: ""
            }
        },
        {
            name: "\"THE ROCK\"",
            video: {
                src: "",
                poster: "",
                alt: ""
            }
        },
    ],
    reviewMagazineItems: [
        {
            logo: {
                src: "",
                alt: ""
            },
            text: "\"AI Wealth Machine is redefining how everyday people launch online income streams—with no code, no product, and no prior experience\"",
        },
        {
            logo: {
                src: "",
                alt: ""
            },
            text: "\"One of the few platforms using artificial intelligence not for novelty—but for real, automated business creation\""
        },
        {
            logo: {
                src: "",
                alt: ""
            },
            text: "\"AI Wealth Machine isn’t about chasing trends—it’s quietly powering a new kind of entrepreneurship that runs in the background\""
        },
    ]
}