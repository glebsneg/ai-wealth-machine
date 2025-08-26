import { IDataSection, TImage } from "@/types/types"

interface IDataQuarantee extends IDataSection {
    text: string;
    badge: TImage;
    photosLeft: TImage[];
    photosRight: TImage[];
}

export const dataQuarantee: IDataQuarantee = {
    title: "Feel the Shift or It’s On Us — Guaranteed",
    text: "We believe everyone deserves to feel clear, energized, and balanced—without the risk of wasted money. That’s why CellTox comes with a 60-Day Money-Back Guarantee. If you don’t feel the difference, send it back. No hassle. No questions.",
    badge: {
        src: "",
        alt: ""
    },
    photosLeft: [],
    photosRight: []
}