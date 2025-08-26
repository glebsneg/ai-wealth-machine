import clsx from "clsx";

import styles from "@/components/gradient-card/GradientWrapper.module.css";
import { Slot } from "@radix-ui/react-slot";

type GradientCardProps = {
  bgGradient_deg?: string;
  bgGradientColorFrom: string;
  bgGradientColorVia?: string;
  bgGradientColorTo: string;
  bgGradientFrom?: string;
  bgGradientVia?: string;
  bgGradientTo?: string;

  gradient_deg_1?: string;
  gradientFrom_1?: string;
  gradientTo_1?: string;
  gradientColorFrom_1?: string;
  gradientColorTo_1?: string;

  gradient_deg_2?: string;
  gradientFrom_2?: string;
  gradientTo_2?: string;
  gradientColorFrom_2?: string;
  gradientColorTo_2?: string;

  strokeWidthPx?: number;
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
};

export default function GradientWrapper({
  bgGradient_deg = "0deg",
  bgGradientColorFrom,
  bgGradientColorVia,
  bgGradientColorTo,
  bgGradientFrom = "0%",
  bgGradientVia = "50%",
  bgGradientTo = "100%",

  gradient_deg_1 = "0deg",
  gradientFrom_1 = "0%",
  gradientTo_1 = "100%",
  gradientColorFrom_1,
  gradientColorTo_1,

  gradient_deg_2 = "0deg",
  gradientFrom_2 = "0%",
  gradientTo_2 = "100%",
  gradientColorFrom_2,
  gradientColorTo_2,

  strokeWidthPx = 1,
  className = "",
  asChild = false,
  children,
}: GradientCardProps) {

  const bgGradient = `${bgGradient_deg}, ${bgGradientColorFrom} ${bgGradientFrom}, ${bgGradientColorVia ? bgGradientColorVia + bgGradientVia + "," : ""} ${bgGradientColorTo} ${bgGradientTo}`;
  const stroke1 = `${gradient_deg_1}, ${gradientColorFrom_1 ?? bgGradientColorFrom} ${gradientFrom_1 ?? bgGradientFrom}, ${gradientColorTo_1 ?? bgGradientColorTo} ${gradientTo_1 ?? bgGradientTo}`;
  const stroke2 = `${gradient_deg_2}, ${gradientColorFrom_2 ?? bgGradientColorFrom} ${gradientFrom_2 ?? bgGradientFrom}, ${gradientColorTo_2 ?? bgGradientColorTo} ${gradientTo_2 ?? bgGradientTo}`;

  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={clsx(styles.card, className)}
      style={
        {
          ["--bg-gradient"]: bgGradient,
          ["--stroke1"]: stroke1,
          ["--stroke2"]: stroke2,
          ["--stroke-width"]: `${strokeWidthPx}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Comp>
  );
}