"use client";
import { useCountdown } from "@/hooks/useCountdown";
import { dataTimer } from "@/components/timer/timer.data";

// TODO: Delete btn id="TO_DELETE"
export default function Timer({ seconds }: { seconds: number }) {
    const { time, start, isFinished } = useCountdown(seconds);
    const minutesText: string = String(Math.floor(time / 60)).padStart(2, "0");
    const secondsText: string = String(time % 60).padStart(2, "0");

    return (
        <div className="font-inter text-background flex flex-col justify-center items-center">
            <p className="text-xl">{dataTimer.title}</p>
            <p className="font-black text-[2.5rem]">
                {minutesText}:{secondsText}
            </p>
            <button id="TO_DELETE" onClick={start}>Start</button>
        </div>
    );
}