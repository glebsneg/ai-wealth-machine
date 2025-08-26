"use client"
import clsx from "clsx";
import Image, { StaticImageData } from 'next/image'
import { useRef, useState } from "react";

import { TProps, TVideo } from "@/types/types";
import { dataVideo } from "@/components/video/video.data";

export type TVideoCProps = {
    dataVideoParameter: TVideo;
    pauseOnClick?: boolean;
    controls?: boolean;
    widthStartVideo?: () => void;
    aspectRatio?: string;
    fetchPriority?: "auto" | "high" | "low" | undefined;
    preload?: "auto" | "metadata" | "none";
    placeholder?: "blur" | undefined
    sizes: string,
    classNameVideo?: string;
} & TProps

export default function VideoC({
    dataVideoParameter,
    pauseOnClick = false,
    controls = true,
    widthStartVideo = () => { },
    aspectRatio = "",
    fetchPriority = "auto",
    preload = "none",
    placeholder = undefined,
    sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1536px",
    classNameVideo = "",
    className = ""
}: TVideoCProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoStarted, setVideoStarted] = useState<boolean>(false);

    const handlePlay = () => {
        if (videoRef.current) {
            setVideoStarted(true);
            videoRef.current.play();
        }
    };

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
                    sizes={sizes}
                    placeholder={placeholder}
                    fill
                    src={dataVideoParameter.poster.srcMobile ?? dataVideoParameter.poster.src}
                    alt={dataVideoParameter.poster.alt}
                    priority
                    fetchPriority={fetchPriority}
                    className={clsx("",
                        videoStarted ? "hidden" : "flex")} />
            </picture>


            <div className={clsx("relative rounded-2xl overflow-hidden object-contain", aspectRatio, classNameVideo)}>
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
                    preload={preload} playsInline aria-label={dataVideoParameter.poster.alt}>
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