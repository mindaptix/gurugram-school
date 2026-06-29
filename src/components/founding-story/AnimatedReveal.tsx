"use client";

import type { ReactNode } from "react";

import { useInViewOnce } from "@/hooks/use-in-view-once";

type AnimatedRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "rise" | "left" | "right" | "scale";
  delayMs?: number;
};

export function AnimatedReveal({
  children,
  className = "",
  variant = "rise",
  delayMs = 0,
}: AnimatedRevealProps) {
  const [ref, isVisible] = useInViewOnce<HTMLDivElement>(0.18);

  const variantClass =
    variant === "left"
      ? "founding-reveal-left"
      : variant === "right"
        ? "founding-reveal-right"
        : variant === "scale"
          ? "founding-reveal-scale"
          : "founding-reveal-rise";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
