"use client";
import { create } from "zustand";

type TimerState = {
    finished: boolean;
    setFinished: (v: boolean) => void;
};

export const useTimerStore = create<TimerState>((set) => ({
    finished: false,
    setFinished: (v) => set({ finished: v })
}));