import { useEffect, useState } from "react";

export default function useMediaQuery(width: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(min-width: ${width})`).matches;
  });

  useEffect(() => {
    const handleResize = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    window.matchMedia(`(min-width: ${width})`).addEventListener("change", (e) => handleResize(e));
    return () => {
      window.matchMedia(`(min-width: ${width})`).removeEventListener("change", (e) => handleResize(e));
    };
  }, [width]);

  return matches;
}
