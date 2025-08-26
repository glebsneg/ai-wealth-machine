import { dataGetAccess } from "@/components/get-access/getAccess.data"
import { IconCheck, IconCheckStar } from "@/components/Icons";
import CTAButton from "@/components/cta-button/CTAButton";
import ClientLastName from "@/components/get-access/ClientLastName";
import GradientWrapper from "@/components/gradient-card/GradientWrapper";

export default function GetAccess() {
    return (

        <div className="font-at-chrome rounded-3xl bg-[linear-gradient(60deg,_#ff0433_0%,_#ffb243_10%,_rgba(0,0,0,0.12)_15%,_rgba(0,0,0,0.12)_90%,_#ffb243_95%,_#ff0433_100%)] p-[1px]">
            <div className="bg-white rounded-3xl relative">
                <div className="bg-orange-custom py-3 flex justify-center items-center rounded-t-3xl
                    font-bold text-xs lg:text-base
                    absolute -top-[1px] -left-[1px] w-[calc(100%+2px)] h-14">
                    <span className="text-white pr-2.5">{dataGetAccess.subtitleTop}</span>
                    <span className="bg-yellow-custom rounded-[3.5rem] px-3 py-1">{dataGetAccess.badgeTop}</span>
                </div>
                <div className="pt-20 lg:pt-23 pb-6 lg:pb-9 px-6 lg:px-14">
                    <h2 className="uppercase font-bold text-[1.75rem] lg:text-[2rem] flex flex-col lg:flex-row gap-0 lg:gap-1 justify-center items-center">
                        <div className="text-orange-custom">
                            {dataGetAccess.title}
                        </div>
                        <div>
                            {dataGetAccess.titleEnd}
                        </div>
                    </h2>
                    <div className="py-6 flex flex-col gap-[0.5625rem] lg:gap-4">
                        {dataGetAccess.services.map((service) => (
                            <div key={service.name} className="flex items-center gap-1 lg:gap-3 text-sm lg:text-base">
                                <span className="lg:bg-[rgba(18,18,21,0.04)] rounded-full h-8 w-8 flex justify-center items-center">
                                    <IconCheck className="hidden lg:flex" />
                                    <IconCheck className="flex lg:hidden" size={24} />
                                </span>
                                <span className="font-semibold">{service.name}</span>
                                <div className="flex-grow border-t border-dashed border-black"></div>
                                <div className="flex gap-1">
                                    <span className="font-bold">{service.price.priceNew}</span>
                                    <span className="font-medium text-black/56 line-through">{service.price.priceOld}</span>
                                    <span className="font-medium text-black/56">{service.price.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <GradientWrapper
                        asChild
                        bgGradientColorFrom={"rgba(255,8,67,0.12)"}
                        bgGradientColorTo={"rgba(255,154,35,0.12)"}
                        bgGradient_deg="94deg"

                        gradientColorFrom_1="rgba(255, 154, 35, 0.24)"
                        gradientColorTo_1="rgba(255, 8, 67, 0.24)"

                        className="rounded-xl"
                    >
                        <div className="
                        px-4 lg:px-6 py-3 mb-4 lg:mb-6
                        flex items-center justify-center gap-3">
                            <IconCheckStar />
                            <span className="font-semibold
                        bg-clip-text text-transparent bg-[linear-gradient(94deg,_rgba(255,8,67,1)_0%,_rgba(255,8,67,1)_30%,_rgba(255,154,35,1)_100%)]">
                                {dataGetAccess.signed}
                            </span>
                            <div className="flex-grow border-t border-dashed border-black"></div>
                            <span className="font-pf-marlet text-2xl px-2 -mt-1
                        bg-clip-text text-transparent bg-[linear-gradient(106deg,_rgba(255,8,67,1)_0%,_rgba(255,8,67,1)_30%,_rgba(255,154,35,1)_100%)]">
                                <ClientLastName />
                            </span>
                        </div>
                    </GradientWrapper>
                    <CTAButton />
                </div>
            </div>
        </div >
    );
}
