import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export function Modal({ project, onClose, lang }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  if (!project) return null;

  const projectMedia =
    project.media && project.media.length > 0
      ? project.media
      : [{ type: "image", url: project.image }];

  const nextMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === projectMedia.length - 1 ? 0 : prev + 1,
    );
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? projectMedia.length - 1 : prev - 1,
    );
  };

  const current = projectMedia[currentIndex];

  const labels = {
    es: {
      challenge: "El Reto",
      features: "Características",
      role: "Rol",
      live: "ver vivo →",
      repo: "código fuente",
      year: "Año",
    },
    en: {
      challenge: "The Challenge",
      features: "Key Features",
      role: "Role",
      live: "view live →",
      repo: "source code",
      year: "Year",
    },
  };

  const t = labels[lang];

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{ display: "flex" }}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <p>&gt; project_details</p>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-gallery">
            {projectMedia.length > 1 && (
              <>
                <button className="nav-btn prev" onClick={prevMedia}>
                  <FaChevronLeft />
                </button>
                <button className="nav-btn next" onClick={nextMedia}>
                  <FaChevronRight />
                </button>
              </>
            )}
            <div className="media-screen">
              {current.type === "video" ? (
                <video src={current.url} autoPlay muted loop playsInline />
              ) : (
                <img src={current.url} alt={project.title} />
              )}
            </div>
            <div className="media-index">
              {currentIndex + 1} / {projectMedia.length}
            </div>
          </div>

          <div className="modal-info">
            <div className="info-scroll">
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-description">{project.description[lang]}</p>

              <div className="modal-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="info-section challenge-box">
                <h4>{t.challenge}</h4>
                <p>{project.challenge[lang]}</p>
              </div>

              <div className="info-section">
                <h4>{t.features}</h4>
                <ul className="features-list">
                  {project.features[lang]?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-side">
                <div className="side-item">
                  <h4>{t.role}</h4>
                  <p>{project.role[lang] || "Frontend Dev & 3D Artist"}</p>
                </div>
                <div className="side-item">
                  <h4>Focus</h4>
                  <p>
                    {project.focus[lang] || "UX, animations, layout system"}
                  </p>
                </div>
                <div className="side-item">
                  <h4>{t.year}</h4>
                  <p>{project.year || "2025"}</p>
                </div>
              </div>
            </div>
            {(project.link || project.repo) && (
              <div className="modal-footer">
                 {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-live"
                >
                  {t.live}
                </a>)}
                {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="modal-repo"
                >
                  {t.repo}
                </a>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
