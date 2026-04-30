import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Modal } from "./components/Modal";

function App() {
  const [lang, setLang] = useState("es");

  const [count, setCount] = useState(0);

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About />
      <Projects onProjectClick={openModal} />
      <Contact />

      {selectedProject && (
        <Modal
          key="modal-unico"
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default App;
