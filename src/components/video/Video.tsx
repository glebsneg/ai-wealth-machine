"use client"
import clsx from "clsx";
import Image, { StaticImageData } from 'next/image'
import { useRef, useState } from "react";

import { Video } from "@/types/types";
import { dataVideo } from "@/components/video/video.data";

export type VideoCProps = {
    dataVideoParameter: Video;
    pauseOnClick?: boolean;
    controls?: boolean;
    widthStartVideo?: () => void;
    aspectRatio?: string;
    classNameVideo?: string;
    className?: string;
}

export default function VideoC({ dataVideoParameter, pauseOnClick = false, controls = true, widthStartVideo = () => { }, aspectRatio = "", classNameVideo = "", className = "" }: VideoCProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoStarted, setVideoStarted] = useState<boolean>(false);

    const handlePlay = () => {
        if (videoRef.current) {
            setVideoStarted(true);
            videoRef.current.play();
        }
    };

    dataVideoParameter.srcMobile = dataVideoParameter.srcMobile ? dataVideoParameter.srcMobile : dataVideoParameter.src;

    return (
        <div className={clsx("relative w-full", className)}>

            <picture className="absolute inset-0">
                {dataVideoParameter.poster.srcMobile &&
                    <source
                        srcSet={(dataVideoParameter.poster.src as StaticImageData).src}
                        media="(min-width: 768px)"
                        type="image/webp"
                    />
                }
                <Image
                    sizes="(max-width: 1536px) 100vw, 100vw"
                    fill
                    src={(dataVideoParameter.poster.srcMobile as StaticImageData)?.src ?? (dataVideoParameter.poster.src as StaticImageData).src}
                    alt={dataVideoParameter.poster.alt}
                    priority
                    className={clsx("",
                        videoStarted ? "hidden" : "flex")} />
            </picture>


            <div className={clsx("relative rounded-2xl overflow-hidden object-contain", classNameVideo)}>
                <video className={clsx("bg-black",
                    aspectRatio,
                    videoStarted ? "flex" : "hidden")}
                    ref={videoRef}
                    controls={controls}
                    onClick={(e) => {
                        if (!pauseOnClick) {
                            return;
                        }
                        const video = e.currentTarget;
                        if (video.paused) {
                            video.play();
                        } else {
                            video.pause();
                        }
                    }}
                    preload="metadata" playsInline aria-label={dataVideoParameter.poster.alt}>
                    <source src={dataVideoParameter.src} media="(min-width: 768px)" type="video/mp4" />
                    <source src={dataVideoParameter.srcMobile} media="(max-width: 767px)" type="video/mp4" />
                </video>
            </div>
            <button className={clsx("absolute w-1/2 md:w-1/4 h-1/3 top-[33%] left-[25%] md:left-[38%]",
                videoStarted ? "hidden" : "flex")}
                onClick={() => {
                    handlePlay();
                    widthStartVideo();
                }}
                aria-label={dataVideo.title}
            />
        </div>
    );
}