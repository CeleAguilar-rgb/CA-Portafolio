import { Reveal } from "./Reveal";

import { FaReact, FaLaravel, FaCss3Alt, FaFigma } from "react-icons/fa";
import {
  SiPrisma,
  SiBlender,
  SiUnrealengine,
  SiJavascript,
} from "react-icons/si";

const techGroups = [
  {
    category: "Web Development",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "Node/Prisma", icon: <SiPrisma /> },
      { name: "Modular CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    category: "3D & Creative",
    skills: [
      { name: "Blender", icon: <SiBlender /> },
      { name: "Unreal Engine", icon: <SiUnrealengine /> },
      { name: "Figma", icon: <FaFigma /> },
      { name: "Illustration", icon: <SiJavascript /> },
    ],
  },
];

const experience = [
  {
    date: "2024 — Present",
    title: "Lead Developer - Expo LMAD System",
    desc: "Designed and implemented a fullstack administrative dashboard and a real-time QR attendance system for academic exhibitions using Laravel and Vite.",
  },
  {
    date: "2023 — 2024",
    title: "Fullstack Web Collaborator",
    desc: "Collaborated on the logic and database structure for interactive web applications, focusing on API integration and responsive design with React and Prisma.",
  },
  {
    date: "2023 — Present",
    title: "3D Artist & Character Designer",
    desc: "Created original 3D characters and assets, handling the full pipeline from concept art to modeling in Blender and animation logic in Unreal Engine 5.6.",
  },
];

export function About() {
  return (
    <section id="about-section">
      <Reveal>
        <div className="about-inner">
          <div className="about-grid">
            <div className="left-column">
              <div className="card about-card">
                <div className="about-text">
                  <h2>// about_me()</h2>
                  <p>
                    I am a Multimedia and Digital Animation student and a Junior
                    Fullstack Developer. My work is driven by the balance
                    between technical logic and visual aesthetics. While I
                    specialize in building web applications with Laravel and
                    React, I am also a 3D Artist passionate about character
                    design and storytelling.
                  </p>
                </div>
                <div className="about-image">
                  <img src="/assets/IMG_0659.jpg" alt="Portrait" />
                </div>
              </div>

              <div className="card tech-card">
                <h2>&gt; tech_stack[]</h2>
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
      </Reveal>
    </section>
  );
}
