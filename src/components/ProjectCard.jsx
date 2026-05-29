export function ProjectCard({ project, onClick, lang }) {
  const description = project.description[lang];
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-header">
        <p className="project-label">
          &gt; {project.title.toLowerCase().replace(" ", "_")}
        </p>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="project-image">
        <img src={project.media[0].url} alt={project.title} />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tech">
          {project.tech.map((t, index) => (
            <span key={index}>{t}</span>
          ))}
        </div>

        {(project.link || project.repo) && (
          <div className="project-actions">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-live"
              >
                {lang === "es" ? "ver vivo →" : "view live →"}
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn repo"
              >
                {lang === "es" ? "código fuente" : "source code"}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
