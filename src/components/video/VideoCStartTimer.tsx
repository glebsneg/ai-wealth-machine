"use client"

import VideoC, { TVideoCProps } from "@/components/video/VideoC"
import { useTimerStore } from "@/store/timerStore";

type TVideoCStartTimer = TVideoCProps & { seconds?: number }

export default function VideoCStartTimer({ dataVideoParameter, seconds = 5, aspectRatio, fetchPriority, preload, placeholder, classNameVideo, className, sizes, priority }: TVideoCStartTimer) {
    return (
        <VideoC dataVideoParameter={dataVideoParameter} widthStartVideo={() => {
            useTimerStore.getState().start(seconds);
        }}
            aspectRatio={aspectRatio}
            classNameVideo={classNameVideo}
            className={className}
            fetchPriority={fetchPriority}
            preload={preload}
            sizes={sizes}
            placeholder={placeholder}
            priority={priority}
        />
    )
}