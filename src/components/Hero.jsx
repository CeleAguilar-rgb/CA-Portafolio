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

export function Hero({ lang }) {

  const t = translations[lang].hero;

  const line1 = useTypewriter(t.monitor.line1, 20);
  const line2 = useTypewriter(t.monitor.line2, 30);
  const line3 = useTypewriter(t.monitor.line3, 40);
  const line4 = useTypewriter(t.monitor.line4, 50);

  return (
    <section id="hero" className="hero ">
      <div className="hero-inner">
        <Reveal>
          <div className="hero-left">
            <p className="hero-sub">{t.sub}</p>
            <h1 className="hero-title">
             {t.hi} <span>Cele</span>
            </h1>
            <h2 className="hero-role">
             {t.role}
            </h2>
            <p className="hero-description">
           {t.description}
            </p>

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
