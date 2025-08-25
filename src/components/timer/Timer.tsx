"use client";
import { useCountdown } from "@/hooks/useCountdown";
import { useTimerStore } from "@/store/timerStore";
import { dataTimer } from "@/components/timer/timer.data";
import clsx from "clsx";

export default function Timer() {
    useCountdown();
    const { time } = useTimerStore();
    const timerIsRunning = useTimerStore(s => s.isRunning);
    const timerFinished = useTimerStore(s => s.finished);

    const minutesText = String(Math.floor(time / 60)).padStart(2, "0");
    const secondsText = String(time % 60).padStart(2, "0");

    return (
        <div className={clsx("font-inter text-background hidden flex-col justify-center items-center",
            (timerIsRunning || timerFinished) && "!flex"
        )}>
            <p className="text-xl">{dataTimer.title}</p>
            <p className="font-black text-[2.5rem]">
                {minutesText}:{secondsText}
            </p>
        </div>
    );
}