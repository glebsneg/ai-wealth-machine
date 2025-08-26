"use client";
import { create, StoreApi, UseBoundStore } from "zustand";

type TimerState = {
    time: number;
    isRunning: boolean;
    finished: boolean;
    start: (seconds: number) => void;
    tick: () => void;
};

export type UseTimerStore = UseBoundStore<StoreApi<TimerState>>;

export const useTimerStore: UseTimerStore = create<TimerState>((set, get) => ({
    time: 0,
    isRunning: false,
    finished: false,

    start: (seconds) => {
        const { finished, isRunning } = get();
        if (!finished && !isRunning) {
            set({ time: seconds, isRunning: true, finished: false });
        }
    },
    tick: () => {
        const { time, isRunning } = get();
        if (!isRunning) return;
        if (time <= 1) set({ time: 0, isRunning: false, finished: true });
        else set({ time: time - 1 });
    },
}));