"use client";
import { useTimerStore } from "@/store/timerStore";

type TShowWhenTimerFinishedWrapper = {
    children: React.ReactNode,
    show?: boolean,
}

export default function ShowWhenTimerFinishedWrapper({ children, show = true }: TShowWhenTimerFinishedWrapper) {
    const timerFinished: boolean = useTimerStore(s => s.finished);
    const needFinishedTimer: boolean = show ? timerFinished : !timerFinished;

    return needFinishedTimer ? <>{children}</> : null;
}