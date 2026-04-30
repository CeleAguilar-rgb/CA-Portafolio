export function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-header">
        <p className="project-label">&gt; {project.title.toLowerCase().replace(" ", "_")}</p>
        <div className="dots"><span></span><span></span><span></span></div>
      </div>

      <div className="project-image">
        <img src={project.media[0].url} alt={project.title} />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.tech.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>

        <div className="project-actions">
          <a href={project.link} className="link-live">view live →</a>
          <a href={project.repo} className="btn repo">source code</a>
        </div>
      </div>
    </div>
  );
}