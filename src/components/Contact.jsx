
export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        {/* PARTE IZQUIERDA: Texto */}
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

        {/* PARTE DERECHA: La Tarjeta */}
        <div className="contact-right">
          <div className="contact-card">
            <div className="contact-card-header">
              <p>&gt; contact_info</p>
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
            </div>

            <div className="contact-card-body">
              <p className="contact-email">cele@email.com</p>

              <a href="mailto:cele@email.com" className="contact-cta">
                say hi →
              </a>

              <div className="contact-socials">
                <a href="#">github</a>
                <a href="#">linkedin</a>
                <a href="#">cv</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}