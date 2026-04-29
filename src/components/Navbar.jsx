
export function Navbar() {
  return (
    <header className="header animate-fade-down">
      <nav className="nav container">
        <div className="brand">
          <span className="brand-title">Portafolio</span>
          <span className="brand-name">Celeste</span>
        </div>

        <ul className="nav-list">
          <li><a href="#about-section" className="nav-link">About</a></li>
          <li><a href="#projects-section" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <a href="#contact" className="btn btn-pri">Get in touch</a>
      </nav>
    </header>
  );
}