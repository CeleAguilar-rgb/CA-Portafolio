import { projectsData } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";

export function Projects({ onProjectClick }) {
  return (
    <section id="projects-section" >
       <Reveal>
      <div className="projects-inner ">
        <h2 className="section-title">&gt; projects()</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}
