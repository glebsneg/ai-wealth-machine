"use client"
import { AnimatePresence, motion } from "motion/react";

import Timer from "@/components/timer/Timer";
import { useTimerStore } from "@/store/timerStore";
import GetAccess from "@/components/get-access/GetAccess";

export default function HeroTimer() {
    const timerFinished = useTimerStore(s => s.finished);

    return (
        <>
            <div className="-m-12 bg-gradient-to-b from-[#FF0843] to-[#FF9A23] pb-9 pt-18 w-2/3 max-w-md">
                {timerFinished ? "" : <Timer />}
            </div>
            <AnimatePresence initial={false}>
                {timerFinished ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        key="GetAccess"
                    >
                         <div className="w-full lg:max-w-fit justify-center mt-12">
                            <GetAccess />
                        </div >
                    </motion.div>
                ) : null}
            </AnimatePresence>
           

        </>
    );
}