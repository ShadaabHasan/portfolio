'use client'

import { useEffect, useState } from "react";

// Returns true when the user has scrolled near the bottom of the page.
// "offset" = how many pixels from the bottom counts as "near".
export default function useIsBottom(offset = 400) {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setIsBottom(scrollPosition >= pageHeight - offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isBottom;
}