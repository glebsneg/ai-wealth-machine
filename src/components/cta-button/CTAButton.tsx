"use client"
import clsx from "clsx";
import { motion } from "motion/react";

import { dataCTAButton } from "@/components/cta-button/ctaButton.data"
import { Button } from "@/components/ui/button"
import { IconShield } from "@/components/Icons";
import { TProps } from "@/types/types";
import { useTimerStore } from "@/store/timerStore";

export default function CTAButton({ className }: TProps) {
  const timerFinished = useTimerStore(s => s.finished);

  return (
    <motion.div
      animate={{
        rotate: [0, -3, 5, -5, 3, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2, 
        ease: "easeInOut",
      }}
    >
      <div className={clsx("flex justify-center items-center self-center", className)}>
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={"btnHover"}
        >
          <Button variant="outline" className={clsx("px-14 py-2.5 w-full h-18 border-2 flex flex-col uppercase",
            timerFinished && "border-yellow-dark-custom bg-gradient-to-r from-yellow-custom via-yellow-custom/50 to-yellow-custom shadow-gold"
          )}
            onClick={() => !timerFinished && window.scrollTo({ top: 0, behavior: "smooth" })}>
            <span className="font-rebond font-bold text-base lg:text-xl">
              {timerFinished ? dataCTAButton.textCompleted.basic : dataCTAButton.textDefault}
            </span>
            {timerFinished &&
              <span className="font-at-chrome font-bold text-xs flex flex-row items-center opacity-80">
                <IconShield className="size-5" />
                {dataCTAButton.textCompleted.secondary}
              </span>
            }
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
