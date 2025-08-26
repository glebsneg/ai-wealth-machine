import { StaticImageData } from "next/image";

export interface IDataSection {
    title: string;
    subtitleTop?: string;
    subtitleBottom?: string;
}

export type TImage = {
    src: StaticImageData | string;
    srcMobile?: StaticImageData | string;
    alt: string;
}

export type TVideo = {
    src: string;
    srcMobile: string;
    poster: TImage;
}

export type TLink = {
    href: string;
    text: string
}

export type TProps = {
    className?: string
}