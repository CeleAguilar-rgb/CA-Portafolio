import { useState, useEffect } from "react";
import { translations } from "../data/translations.js";

export function Navbar({ lang }) {
  const [activeSection, setActiveSection] = useState("hero");
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "hero",
        "about-section",
        "projects-section",
        "contact",
      ];
      const scrollY = window.scrollY;
      let current = "";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = id;
          }
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header animate-fade-down">
      <nav className="nav">
        <div className="brand">
          <span className="brand-title">
            <a href="#hero">Portafolio</a>
          </span>
        </div>

        <ul className="nav-list">
          <li>
            <a
              href="#about-section"
              className={`nav-link ${activeSection === "about-section" ? "active" : ""}`}
            >
              {t.about}
            </a>
          </li>
          <li>
            <a
              href="#projects-section"
              className={`nav-link ${activeSection === "projects-section" ? "active" : ""}`}
            >
              {t.projects}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            >
              {t.contact}
            </a>
          </li>
        </ul>

       <a href="/tu-cv.pdf" target="_blank" rel="noreferrer" className="btn-resume">
  {lang === "es" ? "Ver CV" : "View CV"}
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
</a>
      </nav>
    </header>
  );
}
