import { useEffect, useRef, useState, type RefObject } from "react";

export function useInViewPlay<T extends HTMLElement>(): {
  ref: RefObject<T | null>;
  playing: boolean;
} {
  const ref = useRef<T | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setPlaying(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "40px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, playing };
}

export function playClass(playing: boolean): string {
  return playing ? "is-playing" : "";
}
