import { LOGOS_ALL } from "../Icons";
import clsx from "clsx";
import { dataAsSeenOn } from "./asSeenOn.data";

export default function AsSeenOn() {
    const MAX_LOGOS_FOR_MOBILE: number = 15;

    return (
        <section className="flex flex-col justify-center items-center py-9 px-4 px-md-14">
            <div className="mb-8 outline-2 outline-[#E7AB00] rounded-2xl py-1 px-3 font-inter font-black bg-gradient-to-r from-yellow-custom via-yellow-custom/50 to-yellow-custom"
                style={{
                    boxShadow: `0 4px 24px rgba(254, 194, 1, 0.56)`,
                }}>
                {dataAsSeenOn.title}
            </div>
            <div className="flex flex-wrap max-w-full justify-center items-center gap-y-3 gap-x-4">
                {LOGOS_ALL.map((logo, i) => (
                    <logo.component key={logo.name + i} className={clsx("basis-1/4 md:basis-1/5 lg:basis-1/8 hidden",
                        i < MAX_LOGOS_FOR_MOBILE && "flex!",
                        i >= MAX_LOGOS_FOR_MOBILE && "lg:flex",
                    )} />
                ))}
            </div>
        </section>
    );
}
