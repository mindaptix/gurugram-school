"use client";

import { useEffect, useRef } from "react";

export function CampusTourVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch {
        // Autoplay can be blocked until user interaction; retry when visible.
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void playVideo();
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    video.addEventListener("loadeddata", playVideo);

    if (video.readyState >= 2) {
      void playVideo();
    }

    return () => {
      observer.disconnect();
      video.removeEventListener("loadeddata", playVideo);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      src="/dpsvideo1.mp4"
      aria-label="Drone tour of DPS Gurugram campus"
    >
      Your browser does not support the video tag.
    </video>
  );
}
