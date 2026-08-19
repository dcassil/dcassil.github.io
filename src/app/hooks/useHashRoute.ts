import { useState, useEffect } from "react";
import type { Section } from "../types";

export function useHashRoute(): [Section, (s: Section) => void] {
  const getSection = (): Section => {
    const hash = window.location.hash.replace("#/", "").replace("#", "") as Section;
    const valid: Section[] = [
      "product",
      "product/component-lib/demo",
      "code",
      "experience",
      "architecture",
      "career",
    ];
    return valid.includes(hash) ? hash : "home";
  };
  const [section, setSection] = useState<Section>(getSection);
  useEffect(() => {
    const handler = () => { setSection(getSection()); };
    window.addEventListener("hashchange", handler);
    return () => { window.removeEventListener("hashchange", handler); };
  }, []);
  const navigate = (s: Section) => {
    window.location.hash = s === "home" ? "" : s;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return [section, navigate];
}
