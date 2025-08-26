"use client";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";

import { useCountdown } from "@/hooks/useCountdown";
import { useTimerStore } from "@/store/timerStore";
import { dataTimer } from "@/components/timer/timer.data";

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
            <AnimatePresence initial={false}>
                {(timerIsRunning || timerFinished) && "!flex" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="Timer"
                    >
                        <p className="text-xl">{dataTimer.title}</p>
                        <p className="font-black text-[2.5rem]">
                            {minutesText}:{secondsText}
                        </p>
                    </motion.div>
                ) : null}
            </AnimatePresence>
           
        </div>
    );
}