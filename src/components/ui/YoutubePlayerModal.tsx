"use client";

import { useState, useEffect } from "react";
import { PlayCircle, X } from "lucide-react";

interface YoutubePlayerModalProps {
  videoId: string;
}

export default function YoutubePlayerModal({
  videoId,
}: YoutubePlayerModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // Small delay so the element is mounted before the transition starts
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    // Wait for the transition to finish before unmounting
    setTimeout(() => setIsOpen(false), 300);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={openModal}
        aria-label="Play latest episode"
        className="group flex items-center justify-center"
      >
        <PlayCircle className="h-10 w-10 text-secondary transition-transform duration-300 group-hover:scale-110" />
      </button>

      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal content */}
          <div
            className={`relative z-10 w-full max-w-4xl mx-4 md:mx-8 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Close button */}
            <div className="flex justify-end mb-3">
              <button
                onClick={closeModal}
                className="flex items-center gap-2 font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant hover:text-secondary transition-colors"
              >
                <span>Close</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Player */}
            <div className="relative aspect-video border border-divider overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
