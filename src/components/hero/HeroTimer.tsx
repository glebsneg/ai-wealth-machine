"use client"
import Timer from "@/components/timer/Timer";
import { useTimerStore } from "@/store/timerStore";
import GetAccess from "@/components/get-access/GetAccess";
import clsx from "clsx";

export default function HeroTimer() {
    const timerFinished = useTimerStore(s => s.finished);

    return (
        <>
            <div className="-m-12 bg-gradient-to-b from-[#FF0843] to-[#FF9A23] pb-9 pt-18 w-2/3 max-w-md">
                {timerFinished ? "" : <Timer />}
            </div>
            <div className={clsx("w-full lg:max-w-fit justify-center mt-12",
                timerFinished ? "" : "hidden"
            )}>
                <GetAccess />
            </div >

        </>
    );
}