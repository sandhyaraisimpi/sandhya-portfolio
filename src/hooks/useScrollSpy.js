import { useEffect, useState } from "react";

export const useScrollSpy = (SectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // find the current section
      for (let i = SectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(SectionIds[i]);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(SectionIds[i]);
            break;
          }
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [SectionIds, offset]);

  return activeSection;
};

// smooth scroll to a section
export const scrollToSection = (SectionId, offset = 80) => {
  const section = document.getElementById(SectionId);

  if (section) {
    const top = section.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};