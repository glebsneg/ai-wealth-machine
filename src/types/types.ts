import { StaticImageData } from "next/image";

export interface IDataSection {
    title: string;
    subtitleTop?: string;
    subtitleBottom?: string;
}

export type Image = {
    src: StaticImageData | string;
    srcMobile?: StaticImageData | string;
    alt: string;
}

export type Video = {
    src: string;
    srcMobile?: string;
    poster: Image;
}

export type Link = {
    href: string;
    text: string
}

export type Props = {
    className?: string
}