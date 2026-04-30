import { Reveal } from "./Reveal";
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";
import { translations } from "../data/translations.js";

export function Contact({ lang }) {

  const t = translations[lang].contact;
  return (
    <section id="contact" className="contact">
      <Reveal>
        <div className="contact-inner">
          <div className="contact-left">
            <p className="contact-label">{t.label}</p>

            <h2 className="contact-title">
              {t.title} <br />
              {t.titleBold}
            </h2>

            <p className="contact-text">
              {t.text}
            </p>
          </div>

          <div className="contact-right">
            <div className="contact-card">
              <div className="contact-card-header">
                <p>{t.cardHeader}</p>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="contact-card-body">
                <p className="contact-email">celeaguilar.la@gmail.com</p>

                <a
                  href="mailto:celeaguilar.la@gmail.com"
                  className="contact-cta"
                >
                  {t.cta}
                </a>

                <div className="contact-socials">
                  <a
                    href="https://github.com/CeleAguilar-rgb"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://linkedin.com/in/cele-aguilar"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="/tu-cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Download CV"
                  >
                    <FaRegFilePdf />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
