"use client";
import { useEffect, useState, useCallback } from "react";
import { useTimerStore } from "@/store/timerStore";

export function useCountdown(seconds: number, interval = 1000) {
    const [time, setTime] = useState(seconds);
    const [isRunning, setIsRunning] = useState(false);
    const { setFinished } = useTimerStore();

    useEffect(() => {
        if (!isRunning) return;
        if (time <= 0) {
            setFinished(true);
            setIsRunning(false);
            return;
        }

        const id = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, interval);

        return () => clearInterval(id);
    }, [time, interval, isRunning, setFinished]);

    const start = useCallback(() => {
        setTime((prev) => (prev <= 0 ? seconds : prev));
        setFinished(false);
        setIsRunning(true);
    }, [seconds, setFinished]);

    return { time, start, isFinished: time <= 0 };
}