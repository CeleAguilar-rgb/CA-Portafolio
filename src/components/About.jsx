import { Reveal } from "./Reveal";
import { translations } from "../data/translations.js";

import { FaReact, FaLaravel, FaCss3Alt, FaFigma } from "react-icons/fa";
import {
  SiPrisma,
  SiBlender,
  SiUnrealengine,
  SiJavascript,
} from "react-icons/si";

export function About({ lang }) {
  const t = translations[lang].about;
  const techGroups = [
    {
      category: t.categories.web,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Laravel", icon: <FaLaravel /> },
        { name: "Node/Prisma", icon: <SiPrisma /> },
        { name: "Modular CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      category: t.categories.creative,
      skills: [
        { name: "Blender", icon: <SiBlender /> },
        { name: "Unreal Engine", icon: <SiUnrealengine /> },
        { name: "Figma", icon: <FaFigma /> },
      ],
    },
  ];
  return (
    <section id="about-section">
      <Reveal>
        <div className="about-inner">
          <div className="about-grid">
            <div className="left-column">
              <div className="card about-card">
                <div className="about-text">
                  <h2>{t.title}</h2>
                  <p>{t.description}</p>
                </div>
                <div className="about-image">
                  <img src="/assets/IMG_0659.jpg" alt="Portrait" />
                </div>
              </div>

              <div className="card tech-card">
                <h2>{t.techTitle}</h2>
                <div className="tech-container">
                  {techGroups.map((group, i) => (
                    <div className="tech-group" key={i}>
                      <h4 className="tech-group-title">{group.category}</h4>
                      <div className="tech-list">
                        {group.skills.map((skill, index) => (
                          <span className="tech-item" key={index}>
                            <span className="tech-icon">{skill.icon}</span>
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="right-column">
              <div className="card projects-card">
                <h2>{t.expTitle}</h2>
                {t.experience.map((item, index) => (
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
      </Reveal>
    </section>
  );
}
