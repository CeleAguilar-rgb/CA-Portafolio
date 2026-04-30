import { translations } from "../data/translations.js";


export function Navbar({ lang, setLang }) {
  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
  };
  const t = translations[lang].nav;
  return (
    <header className="header animate-fade-down">
      <nav className="nav container">
        <div className="brand">
          <span className="brand-title">
            <a href="#hero">Portafolio</a>
          </span>
          <span className="brand-name">
            <a href="#hero">Celeste</a>
          </span>
        </div>

        <ul className="nav-list">
          <li>
            <a href="#about-section" className="nav-link">
              {t.about}
            </a>
          </li>
          <li>
            <a href="#projects-section" className="nav-link">
              {t.projects}
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              {t.contact}
            </a>
          </li>
        </ul>

        <button onClick={toggleLanguage} className="btn btn-pri">
          {lang === "es" ? "EN" : "ES"}
        </button>

        {/*  <a href="#contact" className="btn btn-pri">
          Get in touch
        </a>*/}
      </nav>
    </header>
  );
}
