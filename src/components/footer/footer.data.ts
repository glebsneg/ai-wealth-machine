import { Link } from "@/data/data"
type rightsReserved = {
    textStart: string;
    textEnd: string;
}

type DataFooter = {
    terms: Link;
    privacy: Link;
    text: string;
    rightsReserved: rightsReserved;
}

export const dataFooter: DataFooter = {
    terms: {
        href: "/",
        text: ""
    },
    privacy: {
        href: "/",
        text: ""
    },
    text: "",
    rightsReserved: {
        textStart: "©",
        textEnd: "AIWeALTHMACHINE.Co . All Rights Reserved."
    }
}