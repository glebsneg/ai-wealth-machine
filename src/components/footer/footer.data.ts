import { TLink } from "@/types/types"

type rightsReserved = {
    textStart: string;
    textEnd: string;
}

type TDataFooter = {
    terms: TLink;
    privacy: TLink;
    text: string;
    rightsReserved: rightsReserved;
}

export const dataFooter: TDataFooter = {
    terms: {
        href: "/",
        text: "Terms & Conditions"
    },
    privacy: {
        href: "/",
        text: "Privacy Policy"
    },
    text: "This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.",
    rightsReserved: {
        textStart: "©",
        textEnd: "AIWeALTHMACHINE.Co . All Rights Reserved."
    }
}