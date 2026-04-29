export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-sub">// developer portfolio</p>
          <h1 className="hero-title">Hi, I'm <span>Cele</span></h1>
          <h2 className="hero-role">Frontend Developer</h2>
          <p className="hero-description">
            Frontend Developer crafting warm, intentional and aesthetic digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-pri">View Projects</a>
            <a href="#contact" className="btn btn-out">Contact Me</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="monitor">
            <div className="monitor-top">
              <span></span><span></span><span></span>
            </div>
              <div className="monitor-screen">
              <p className="code-line cmd">&gt; whoami</p>
              <p className="code-line">Celeste Aguilar</p>

              <p className="code-line cmd">&gt; role</p>
              <p className="code-line">Frontend Developer</p>

              <p className="code-line cmd">&gt; focus</p>
              <p className="code-line">Thoughtful & aesthetic interfaces</p>

              <p className="code-line cmd">&gt; status</p>
              <p className="code-line">Building & learning every day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}