export interface IDataSection {
    title: string;
    subtitleTop?: string;
    subtitleBottom?: string;
}

export type Image = {
    src: string;
    alt: string;
}

export type Video = {
    src: string;
    poster: string;
    alt: string;
}

export type Link = {
    href: string;
    text: string
}

export type Props = {
    className?: string
}