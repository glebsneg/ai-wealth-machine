import { IDataSection, Video } from "@/types/types";
import srcPosterDesktop from "@/../public/images/hero/thumbnail-desktop.webp";
import srcPosterMobile from "@/../public/images/hero/thumbnail-mobile.webp";

interface IDataHero extends IDataSection {
    precentage: string;
    video: Video
}

export const dataHero: IDataHero = {
    title: "You’re almost there..",
    subtitleBottom: "Watch the video below to finish your registration...",
    precentage: "62%",
    video: {
        src: "/videos/hero/desktop.mp4",
        poster: {
            src: srcPosterDesktop,
            srcMobile: srcPosterMobile,
            alt: "Watch this short video to start making 1000$ per day!"
        },
    }
}