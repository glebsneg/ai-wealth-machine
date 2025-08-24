import { IDataSection } from "@/types/types";

interface IDataHero extends IDataSection {
    precentage: string;
}

export const dataHero: IDataHero = {
    title: "You’re almost there..",
    subtitleBottom: "Watch the video below to finish your registration...",
    precentage: "62%"
}