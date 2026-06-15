import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
import { translations } from "../data/translations.js";

export function useTypewriter(text, speed = 50) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText("");

    const timer = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, prev.length + 1));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayedText;
}

export function Hero({ lang, setLang }) {
  const toggleLanguage = () => setLang(lang === "es" ? "en" : "es");
  const t = translations[lang].hero;

  const line1 = useTypewriter(t.monitor.line1, 20);
  const line2 = useTypewriter(t.monitor.line2, 30);
  const line3 = useTypewriter(t.monitor.line3, 40);
  const line4 = useTypewriter(t.monitor.line4, 50);

  return (
    <section id="hero" className="hero ">
      <div className="hero-inner">
        <button onClick={toggleLanguage} className="lang-static-btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          <span>{lang === "es" ? "EN" : "ES"}</span>
        </button>

        <Reveal>
          <div className="hero-left">
            <p className="hero-sub">{t.sub}</p>
            <h1 className="hero-title">
              {t.hi} <span>Cele</span>
            </h1>
            <h2 className="hero-role">{t.role}</h2>
            <p className="hero-description">{t.description}</p>

            <div className="hero-buttons">
              <a href="#projects-section" className="btn btn-pri">
                {t.btnProjects}
              </a>
              <a href="#contact" className="btn btn-out">
                {t.btnContact}
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="hero-right">
            <div className="monitor">
              <div className="monitor-top">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="monitor-screen">
                <p className="code-line cmd">&gt; whoami</p>
                <p className="code-line">{line1}</p>

                <p className="code-line cmd">&gt; role</p>
                <p className="code-line">{line2}</p>

                <p className="code-line cmd">&gt; focus</p>
                <p className="code-line">{line3}</p>

                <p className="code-line cmd">&gt; status</p>
                <p className="code-line terminal-cursor">{line4}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
