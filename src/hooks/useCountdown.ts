"use client";
import { useEffect } from "react";
import { useTimerStore } from "@/store/timerStore";

export function useCountdown(interval = 1000) {
    const isRunning = useTimerStore((s) => s.isRunning);
    const tick = useTimerStore((s) => s.tick);

    useEffect(() => {
        if (!isRunning) return;
        const id = setInterval(() => tick(), interval);
        return () => clearInterval(id);
    }, [isRunning, tick, interval]);
}