import { DataSection } from "@/types/types"

type FaqItems = {
    question: string;
    answer: string;
}
interface DataFaq extends DataSection {
    faqItems: FaqItems[];
}

export const dataFaq: DataFaq = {
    title: "Frequently asked questions",
    faqItems: [{
        question: "How much time will I need to invest before seeing my first sale?",
        answer: "Lorem ipsum dolor sit amet consectetur. Feugiat justo imperdiet sagittis risus tristique vel donec. Purus tristique ut lectus porta pretium felis lobortis. At elit velit nunc morbi nulla ut."
    },
    {
        question: "Do I need technical skills or prior online business experience?",
        answer: "Lorem ipsum dolor sit amet consectetur. Feugiat justo imperdiet sagittis risus tristique vel donec. Purus tristique ut lectus porta pretium felis lobortis. At elit velit nunc morbi nulla ut."
    },
    {
        question: "What exactly am I selling through these comparison websites?",
        answer: "Lorem ipsum dolor sit amet consectetur. Feugiat justo imperdiet sagittis risus tristique vel donec. Purus tristique ut lectus porta pretium felis lobortis. At elit velit nunc morbi nulla ut."
    },
    {
        question: "How realistic are the income claims shown on this page?",
        answer: "Lorem ipsum dolor sit amet consectetur. Feugiat justo imperdiet sagittis risus tristique vel donec. Purus tristique ut lectus porta pretium felis lobortis. At elit velit nunc morbi nulla ut."
    },
    {
        question: "Why don't you charge $2,000 or more for AI Wealth Machine?",
        answer: "Lorem ipsum dolor sit amet consectetur. Feugiat justo imperdiet sagittis risus tristique vel donec. Purus tristique ut lectus porta pretium felis lobortis. At elit velit nunc morbi nulla ut."
    },
    {
        question: "What countries does this system work in?",
        answer: "Lorem ipsum dolor sit amet consectetur. Feugiat justo imperdiet sagittis risus tristique vel donec. Purus tristique ut lectus porta pretium felis lobortis. At elit velit nunc morbi nulla ut."
    },
    {
        question: "Do you offer a money-back guarantee?",
        answer: "Lorem ipsum dolor sit amet consectetur. Feugiat justo imperdiet sagittis risus tristique vel donec. Purus tristique ut lectus porta pretium felis lobortis. At elit velit nunc morbi nulla ut."
    }],
}