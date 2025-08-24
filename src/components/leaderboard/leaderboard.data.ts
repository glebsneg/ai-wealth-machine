import { IDataSection } from "@/types/types"

type LeaderboardItem = {
    name: string;
    incomeAllTime: number;
    incomeLatsMonth: number;
}
interface IDataLeaderboard extends IDataSection {
    leaderboardItem: LeaderboardItem[];
    etcBlock: string;
    statistics: {
        numbers: string;
        text: string;
    }[];
}

export const dataLeaderboard: IDataLeaderboard = {
    title: "Ai Wealth Leaderboard",
    subtitleTop: "June - Top 3",
    subtitleBottom: "Join other people and win prizes",
    leaderboardItem: [
        {
            name: "Morgan",
            incomeAllTime: 4552000,
            incomeLatsMonth: 0,
        },
        {
            name: "Jane",
            incomeAllTime: 4332000,
            incomeLatsMonth: 0,
        },
        {
            name: "Tom",
            incomeAllTime: 3952000,
            incomeLatsMonth: 0,
        },
        {
            name: "Ma",
            incomeAllTime: 3452000,
            incomeLatsMonth: 736000,
        },
        {
            name: "De",
            incomeAllTime: 3002000,
            incomeLatsMonth: 480000,
        },
        {
            name: "Jo",
            incomeAllTime: 2852000,
            incomeLatsMonth: 380000,
        },
        {
            name: "Li",
            incomeAllTime: 2252000,
            incomeLatsMonth: 320000,
        },
        {
            name: "Ka",
            incomeAllTime: 1452000,
            incomeLatsMonth: 1050000,
        },
    ],
    etcBlock: "AND MORE PEOPLE JUST LIKE YOU CHANGING THEIR LIVES",
    statistics: [
        {
            numbers: "$50M+",
            text: "Generated this year"
        },
        {
            numbers: "$6m+",
            text: "Generated last month"
        },
        {
            numbers: "1k+",
            text: "Happy men & Women"
        }
    ]
}