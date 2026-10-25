'use client'

import useIsBottom from "@/app/hooks/useIsBottom";

// Adds a margin around the page when the user scrolls near the bottom.
// Only this small part runs in the browser. The page inside can stay a server page.
export default function BottomMargin({ offset = 400, children }) {
  const isBottom = useIsBottom(offset);

  return (
    <div className={`transition-all duration-300 ${isBottom ? "m-5" : "m-0"}`}>
      {children}
    </div>
  );
}