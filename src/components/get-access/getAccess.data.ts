import { IDataSection } from "@/types/types";

type TPrice = {
    text: string;
    priceOld: string;
    priceNew: string;
}

type TService = {
    name: string;
    price: TPrice;
}

interface IDataGetAccess extends IDataSection {
    titleEnd: string;
    badgeTop: string;
    services: TService[];
    signed: string;
}

export const dataGetAccess: IDataGetAccess = {
    title: "GET ACCESS Now",
    titleEnd: "And You'll Get:",
    subtitleTop: "PRICE DOUBLES SOON!",
    badgeTop: "LIMITED TIME",
    services: [
        {
            name: "AI Wealth Machine",
            price: {
                text: "Priceless Value",
                priceOld: "",
                priceNew: ""
            }
        },
        {
            name: "Premium Websites",
            price: {
                text: "Value",
                priceOld: "$2,999",
                priceNew: ""
            }
        },
        {
            name: "Premium Guide",
            price: {
                text: "Value",
                priceOld: "$999",
                priceNew: ""
            }
        },
        {
            name: "Acceleration Call",
            price: {
                text: "Value",
                priceOld: "$249",
                priceNew: ""
            }
        },
        {
            name: "Support Team 24/7",
            price: {
                text: "FREE",
                priceOld: "",
                priceNew: ""
            }
        },
        {
            name: "Hosting",
            price: {
                text: "",
                priceOld: "$200",
                priceNew: "$67"
            }
        },
    ],
    signed: "Signed Under Your Name",
}