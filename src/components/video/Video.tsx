"use client"
import { useTimerStore } from "@/store/timerStore";
import { Video } from "@/types/types";
import { dataVideo } from "@/components/video/video.data";
import clsx from "clsx";
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from "react";

export default function VideoC({ dataVideoParameter }: { dataVideoParameter: Video }) {
    const timerFinished = useTimerStore(s => s.finished);
    const timerIsRunning = useTimerStore(s => s.isRunning);
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <>
            <div className={clsx("relative w-full xl:w-2/3 aspect-[1/1.23] md:aspect-video",
            )}>
                <picture>
                    <source
                        srcSet={(dataVideoParameter.poster.src as StaticImageData).src}
                        media="(min-width: 768px)"
                        type="image/webp"
                    />
                    <Image
                        sizes="(max-width: 1536px) 100vw, 100vw"
                        fill
                        src={(dataVideoParameter.poster.srcMobile as StaticImageData).src}
                        alt={dataVideoParameter.poster.alt}
                        priority
                        className={clsx((timerIsRunning || timerFinished) ? "hidden" : "flex")} />
                </picture>

                <div className="relative rounded-2xl overflow-hidden fill m-0 md:m-6">
                    <video className={clsx("bg-black aspect-[1/1.23] md:aspect-video",
                        (timerIsRunning || timerFinished) ? "flex" : "hidden")}
                        ref={videoRef}
                        controls preload="metadata" playsInline aria-label={dataVideoParameter.poster.alt}>
                        <source src={dataVideoParameter.src} media="(min-width: 768px)" type="video/mp4" />
                        <source src={dataVideoParameter.srcMobile} media="(max-width: 767px)" type="video/mp4" />
                    </video>
                </div>
                <button className={clsx("absolute w-1/2 md:w-1/4 h-1/3 top-[33%] left-[25%] md:left-[38%]",
                    (timerIsRunning || timerFinished) ? "hidden" : "flex")}
                    onClick={() => {
                        useTimerStore.getState().start(5);
                        handlePlay()
                    }}
                    aria-label={dataVideo.title}
                />
            </div>

        </>
    );
}