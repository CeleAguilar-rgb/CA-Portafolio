import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";
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

export function Hero() {
  const line1 = useTypewriter("Celeste Aguilar Lara", 20);
  const line2 = useTypewriter("Fullstack Developer & 3D Artist", 30);
  const line3 = useTypewriter("Aesthetic UI & Visual Storytelling", 40);
  const line4 = useTypewriter("Coding & creating daily", 50);

  return (
    <section id="hero" className="hero ">
      <div className="hero-inner">
        <Reveal>
          <div className="hero-left">
            <p className="hero-sub">// fullstack dev & artist portfolio</p>
            <h1 className="hero-title">
              Hi, I'm <span>Cele</span>
            </h1>
            <h2 className="hero-role">
              Junior Fullstack Developer | 3D Artist
            </h2>
            <p className="hero-description">
              Building robust and aesthetic fullstack applications while
              exploring the world of 3D modeling and digital illustration.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-pri">
                View Projects
              </a>
              <a href="#contact" className="btn btn-out">
                Contact Me
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
