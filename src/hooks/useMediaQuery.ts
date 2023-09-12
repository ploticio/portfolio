import { useEffect, useState } from "react";

export default function useMediaQuery(width: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(min-width: ${width})`).matches;
  });

  useEffect(() => {
    window.matchMedia(`(min-width: ${width})`).addEventListener("change", (e) => setMatches(e.matches));
    return () => {
      window.matchMedia(`(min-width: ${width})`).removeEventListener("change", (e) => setMatches(e.matches));
    };
  }, [width]);

  return matches;
}
