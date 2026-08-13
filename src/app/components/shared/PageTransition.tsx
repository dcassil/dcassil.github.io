import { useState, useEffect, useRef } from "react";
import type { Section } from "../../types";

export function PageTransition({ section, children }: { section: Section; children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const prevSection = useRef(section);

  useEffect(() => {
    if (section !== prevSection.current) {
      setVisible(false);
      const t = setTimeout(() => {
        prevSection.current = section;
        setVisible(true);
      }, 180);
      return () => { clearTimeout(t); };
    }
  }, [section]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 180ms ease, transform 180ms ease",
      }}
    >
      {children}
    </div>
  );
}
