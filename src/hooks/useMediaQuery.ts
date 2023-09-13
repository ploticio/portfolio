import { useEffect, useState } from "react";

export default function useMediaQuery() {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(min-width: 768px)`).matches;
  });

  useEffect(() => {
    const handleResize = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    window.matchMedia(`(min-width: 768px)`).addEventListener("change", (e) => handleResize(e));
    return () => {
      window.matchMedia(`(min-width: 768px)`).removeEventListener("change", (e) => handleResize(e));
    };
  }, []);

  return matches;
}
