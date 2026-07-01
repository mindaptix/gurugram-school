"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { virtualTourCard } from "@/data/home-content";

const ease = [0.22, 1, 0.36, 1] as const;

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  );
}

export function VirtualTourCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);

  const closeTour = useCallback(() => {
    hasPlayedRef.current = false;
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsOpen(false);
  }, []);

  const openTour = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeTour();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeTour, isOpen]);

  const startVideo = useCallback(async () => {
    if (!isOpen || hasPlayedRef.current) return;

    const video = videoRef.current;
    if (!video) return;

    hasPlayedRef.current = true;
    video.currentTime = 0;
    video.muted = true;

    try {
      await video.play();
    } catch {
      hasPlayedRef.current = false;
    }
  }, [isOpen]);

  const modal = (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="virtual-tour-modal"
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Virtual campus tour video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-[#021428]/80 backdrop-blur-sm"
            aria-label="Close virtual campus tour"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease }}
            onClick={closeTour}
          />

          <motion.div
            className="relative z-10 w-full max-w-[1080px] overflow-hidden rounded-sm bg-[#05224a] shadow-[0_32px_80px_rgba(2,20,40,0.5)]"
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", damping: 30, stiffness: 280, mass: 0.85 }}
            onAnimationComplete={(definition) => {
              if (definition === "animate") {
                void startVideo();
              }
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-[#003b73] px-4 py-3 sm:px-5">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#ffd400]">
                  Virtual Campus Tour
                </p>
                <p className="mt-1 text-sm font-semibold text-white/90">
                  Delhi Public School · SPR Gurugram
                </p>
              </div>
              <button
                type="button"
                onClick={closeTour}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/25 text-2xl leading-none text-white transition hover:border-white hover:bg-white hover:text-[#003b73]"
                aria-label="Close video"
              >
                ×
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="auto"
                src={virtualTourCard.video}
                onEnded={() => {
                  hasPlayedRef.current = false;
                }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return (
    <>
      <button
        type="button"
        onClick={openTour}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label="Open virtual campus tour video"
        className="group relative flex h-full min-h-0 w-full cursor-pointer flex-col overflow-hidden rounded-sm border border-[#003b73]/12 text-left shadow-[0_14px_34px_rgba(5,34,74,0.12)] transition duration-300 hover:shadow-[0_18px_40px_rgba(5,34,74,0.16)]"
      >
        <div className="absolute inset-0 overflow-hidden bg-[#d8e6f2]">
          <Image
            src={virtualTourCard.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 304px, 100vw"
            className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            aria-hidden="true"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[62%] bg-gradient-to-t from-[#021428]/94 via-[#021428]/52 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
          <span className="inline-flex w-fit items-center rounded-full bg-white px-3.5 py-1.5 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#006b37] sm:text-[0.78rem]">
            Campus Tour
          </span>

          <div className="mt-auto space-y-4 pt-4">
            <div>
              <h3 className="text-[1.22rem] font-bold uppercase leading-tight tracking-wide text-white sm:text-[1.38rem]">
                Virtual Campus Tour
              </h3>
              <p className="mt-2.5 text-[0.95rem] font-medium leading-relaxed text-white/90 sm:text-[1.02rem]">
                Walk through our campus from anywhere.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-white/20 pt-4">
              <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-white">
                DPS
              </span>

              <span className="pointer-events-none inline-flex items-center gap-3 rounded-full bg-[#003b73] py-2.5 pl-3 pr-4 text-[0.74rem] font-black uppercase tracking-[0.14em] text-white transition group-hover:bg-[#006b37] sm:text-[0.8rem]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffd400] text-[#003b73]">
                  <PlayIcon className="h-4 w-4" />
                </span>
                Watch Now
              </span>
            </div>
          </div>
        </div>
      </button>

      {isMounted ? createPortal(modal, document.body) : null}
    </>
  );
}
