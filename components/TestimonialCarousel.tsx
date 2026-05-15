"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export interface TestimonialItem {
  id: string;
  name: string;
  formerSituation: string;
  currentRole: string;
  employer: string;
  quote: string;
  photoUrl?: string;
}

interface TestimonialCarouselProps {
  items: TestimonialItem[];
}

export default function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const item = items[current];

  return (
    <div className="relative" aria-live="polite" aria-atomic="true">
      <div className="overflow-hidden rounded-2xl bg-white border border-stone-200/60 shadow-sm p-8 md:p-12">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={item.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gradient-to-br from-[#0D4F47] to-[#2aa898] flex items-center justify-center text-white text-3xl font-bold select-none">
                {item.photoUrl ? (
                  <Image
                    src={item.photoUrl}
                    alt={`Photo of ${item.name}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  item.name[0]
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Quote mark */}
              <svg
                className="mb-4 text-[#E8890C]/30"
                width="40"
                height="28"
                viewBox="0 0 40 28"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 28V16C0 6.4 5.6 1.2 16.8 0L18 4C12.8 5.2 10.4 8 10.4 12H18V28H0ZM22 28V16C22 6.4 27.6 1.2 38.8 0L40 4C34.8 5.2 32.4 8 32.4 12H40V28H22Z" />
              </svg>

              <blockquote>
                <p className="text-lg md:text-xl text-stone-800 leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </blockquote>

              <div>
                <p className="font-bold text-[#0D4F47]">{item.name}</p>
                <p className="text-sm text-stone-500">
                  {item.currentRole} at {item.employer}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">Formerly: {item.formerSituation}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-[#0D4F47]" : "w-1.5 bg-stone-300 hover:bg-stone-400"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#0D4F47] hover:text-white hover:border-[#0D4F47] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#0D4F47] hover:text-white hover:border-[#0D4F47] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
