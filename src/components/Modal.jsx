import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export function Modal({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Bloquear scroll del fondo
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  if (!project) return null;

  // Normalizar media (si no hay array, crear uno con la imagen principal)
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
              <p className="modal-description">{project.description}</p>
              
              <div className="modal-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="info-section challenge-box">
                <h4>The Challenge</h4>
                <p>{project.challenge}</p>
              </div>

              <div className="info-section">
                <h4>Key Features</h4>
                <ul className="features-list">
                  {project.features?.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-side">
                <div className="side-item">
                  <h4>Role</h4>
                  <p>{project.role || "Frontend Dev & 3D Artist"}</p>
                </div>
                <div className="side-item">
                  <h4>Focus</h4>
                  <p>{project.focus || "UX, animations, layout system"}</p>
                </div>
                <div className="side-item">
                  <h4>Year</h4>
                  <p>{project.year || "2025"}</p>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="modal-live"
              >
                view live →
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="modal-repo"
              >
                source code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
