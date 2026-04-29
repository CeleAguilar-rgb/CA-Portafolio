const techStack = [
  { name: "HTML", icon: "assets/icons/html.png" },
  { name: "CSS", icon: "assets/icons/css.png" },
  { name: "JavaScript", icon: "assets/icons/js.png" },
  { name: "React", icon: "assets/icons/react.png" },
  { name: "Git", icon: "assets/icons/github.png" },
  { name: "Figma", icon: "assets/icons/figma.png" },
];

const experience = [
  { date: "2023 — Present", title: "Overwatch Pro Player", desc: "Jugar over to lo dia- Road to fucking maste madafaker" },
  { date: "2021 — 2023", title: "Web Development Intern", desc: "Built responsive websites and interactive features for clients." },
];

export function About() {
  return (
    <section id="about-section">
      <div className="about-inner">
        <div className="about-grid">
            
          {/* COLUMNA IZQUIERDA */}
          <div className="left-column">
            {/* CARD ABOUT */}
            <div className="card about-card">
              <div className="about-text">
                <h2>// about_me()</h2>
                <p>Frontend developer apasionada por crear interfaces cálidas, intencionales y visualmente cuidadas.</p>
              </div>
              <div className="about-image">
                <img src="/assets/IMG_0659.jpg" alt="Portrait" />
              </div>
            </div>

            {/* CARD TECH STACK */}
            <div className="card tech-card">
              <h2>&gt; tech_stack[]</h2>
              <div className="tech-list">
                {techStack.map((tech, index) => (
                  <span className="tech-item" key={index}>
                    <img src={tech.icon} alt={tech.name} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA*/}
          <div className="right-column">
            <div className="card projects-card">
              <h2>&gt; experience[]</h2>
              {experience.map((item, index) => (
                <div className="project-item" key={index}>
                  <span className="project-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}