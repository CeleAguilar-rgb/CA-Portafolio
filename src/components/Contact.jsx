import { Reveal } from "./Reveal";
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal>
        <div className="contact-inner">
          <div className="contact-left">
            <p className="contact-label">&gt; let's_work_together()</p>

            <h2 className="contact-title">
              Got an idea? <br />
              Let's make it real.
            </h2>

            <p className="contact-text">
              I’m open to new projects, collaborations or just a nice
              conversation. Feel free to reach out.
            </p>
          </div>

          <div className="contact-right">
            <div className="contact-card">
              <div className="contact-card-header">
                <p>&gt; contact_info</p>
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
                  say hi →
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
