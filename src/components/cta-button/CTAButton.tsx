"use client"
import { useEffect, useState } from "react";
import clsx from "clsx";
import { dataCTAButton } from "@/components/cta-button/ctaButton.data"
import { Button } from "@/components/ui/button"
import { IconShield } from "@/components/Icons";
import { Props } from "@/types/types";

export default function CTAButton({ className }: Props) {
  const [isAlternativeStyle, setIsAlternativeStyle] = useState(false);
  useEffect(() => {
    setIsAlternativeStyle(true);
  }, [])

  return (
    <div className={clsx("flex justify-center items-center self-center", className)}>
      <Button variant="outline" className={clsx("px-14 py-[10px] w-full h-18 border-2 flex flex-col uppercase",
        isAlternativeStyle && "border-yellow-dark-custom bg-gradient-to-r from-yellow-custom via-yellow-custom/50 to-yellow-custom shadow-gold"
      )}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className="font-rebond font-bold text-base lg:text-xl">
          {isAlternativeStyle ? dataCTAButton.textCompleted.basic : dataCTAButton.textDefault}
        </span>
        {isAlternativeStyle &&
          <span className="font-at-chrome font-bold text-xs flex flex-row items-center opacity-80">
            <IconShield className="size-5" />
            {dataCTAButton.textCompleted.secondary}
          </span>
        }
      </Button>
    </div>
  )
}
