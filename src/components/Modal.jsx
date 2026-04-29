
export function Modal({ project, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose} style={{ display: 'flex' }}>
    
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <p>&gt; project_details</p>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div className="modal-gallery">
          <img src={project.image} className="modal-media" alt={project.title} />
        </div>

        <div className="modal-body">
          <div className="modal-main">
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-description">{project.description}</p>
            
            <div className="modal-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="modal-side">
            <div className="side-item">
              <h4>Role</h4>
              <p>Frontend, UI Design</p>
            </div>
            <div className="side-item">
              <h4>Year</h4>
              <p>2025</p>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a href={project.link} className="modal-live">view live →</a>
          <a href={project.repo} className="modal-repo">source code</a>
        </div>
      </div>
    </div>
  );
}