"use client"

import VideoC, { VideoCProps } from "@/components/video/Video"
import { useTimerStore } from "@/store/timerStore";

type VideoCStartTimer = VideoCProps & { seconds?: number }

export default function VideoCStartTimer({ dataVideoParameter, seconds = 5, aspectRatio, fetchPriority, preload, classNameVideo, className }: VideoCStartTimer) {
    return (
        <VideoC dataVideoParameter={dataVideoParameter} widthStartVideo={() => {
            useTimerStore.getState().start(seconds);
        }} aspectRatio={aspectRatio} classNameVideo={classNameVideo} className={className} fetchPriority={fetchPriority} preload={preload} />
    )
}