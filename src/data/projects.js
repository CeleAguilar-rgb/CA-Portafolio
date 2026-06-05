export const projectsData = [
  {
    id: 1,
    title: "MiauChat",
    role: {
      es: "Fullstack Architect & Lead Developer",
      en: "Fullstack Architect & Lead Developer",
    },
    focus: {
      es: "Arquitectura E2E, sincronización de datos, videollamadas P2P",
      en: "E2E architecture, data synchronization, P2P video calls",
    },
    year: "2025",
    description: {
      es: "Ecosistema de comunicación social y productividad con identidad visual felina que integra mensajería instantánea, videollamadas y herramientas de colaboración grupal.",
      en: "Social communication and productivity ecosystem with a feline visual identity that integrates instant messaging, video calls, and group collaboration tools.",
    },
    tech: ["React", "Socket.io", "WebRTC", "Node.js", "Express", "Firebase"],
    challenge: {
      es: "Liderar la arquitectura integral (E2E) de forma autónoma, sincronizando flujos de datos complejos entre mensajería instantánea, señalización P2P para videollamadas y gestión de tareas sin supervisión.",
      en: "Leading the end-to-end (E2E) architecture autonomously, synchronizing complex data flows between instant messaging, P2P signaling for video calls, and task management without supervision.",
    },
    features: {
      es: [
        "Mensajería en tiempo real individual y grupal.",
        "Videollamadas 1:1 mediante protocolo WebRTC.",
        "Sistema 'Patiracha': Gamificación para desbloqueo de emojis.",
        "Gestión de Tareas y envío de correos integrados.",
      ],
      en: [
        "Individual and group real-time messaging.",
        "1:1 video calls via WebRTC protocol.",
        " 'Patiracha' System: Gamification for unlocking emojis.",
        "Integrated Task Management and email services.",
      ],
    },
    media: [
      { type: "image", url: "/assets/projects/Miauchat/MiauChat.png" },
      { type: "image", url: "/assets/projects/Miauchat/Chat.png" },
    ],
    link: "https://miauchat2-0.vercel.app",
    repo: "https://github.com/MadMax2808/miauchat2.0",
  },

  {
    id: 2,
    title: "EXPO LMAD",
    role: {
      es: "Desarrolladora Frontend",
      en: "Frontend Developer",
    },
    focus: {
      es: "Maquetación responsive, interfaces administrativas, sistemas de navegación",
      en: "Responsive layout, administrative interfaces, navigation systems",
    },
    year: "2026",
    description: {
      es: "Plataforma integral desarrollada para la Facultad de Ciencias Físico Matemáticas de la UANL, enfocada en la administración, visualización y gestión de proyectos estudiantiles, asistencia y staff durante el evento EXPO LMAD.",
      en: "Comprehensive platform developed for the Faculty of Physics and Mathematics at UANL, focused on the administration, visualization, and management of student projects, attendance, and staff during the EXPO LMAD event.",
    },
    tech: ["HTML", "CSS", "JavaScript", "Laravel", "GitHub", "Figma"],
    challenge: {
      es: "Replicar con alta precisión diseños complejos de Figma utilizando únicamente CSS puro, garantizando una experiencia totalmente responsive en múltiples dispositivos y coordinando el flujo de trabajo mediante control de versiones (Git) en un equipo multidisciplinario.",
      en: "Replicating complex Figma designs with high precision using only pure CSS, ensuring a fully responsive experience across multiple devices, and coordinating workflow via version control (Git) within a multidisciplinary team.",
    },
    features: {
      es: [
        "Sistema de roles avanzado (Maestros, Estudiantes, Admin, Super Admin, Staff).",
        "Dashboards dinámicos para gestión, edición y aprobación de proyectos.",
        "Sidebar reutilizable y navegación optimizada para paneles administrativos.",
        "Registro de asistencia mediante códigos QR para conferencias y empresas.",
      ],
      en: [
        "Advanced role-based access control (Teachers, Students, Admin, Super Admin, Staff).",
        "Dynamic dashboards for project management, editing, and approval.",
        "Reusable sidebar and optimized navigation for administrative panels.",
        "QR code attendance tracking for conferences and companies.",
      ],
    },
    media: [{ type: "image", url: "/assets/projects/ExpoLMAD/Lmad1.png" }],
    link: "https://lmad.fcfm.uanl.mx/expo",
    repo: "",
  },

  {
    id: 3,
    title: "Pixplore",
    role: {
      es: "Desarrolladora Fullstack (API & Backend Logic)",
      en: "Fullstack Developer (API & Backend Logic)",
    },
    focus: {
      es: "Diseño de API, integración de ORM (Prisma), lógica de servidor",
      en: "API design, ORM integration (Prisma), server-side logic",
    },
    year: "2025",
    description: {
      es: "Plataforma de descubrimiento visual tipo Pinterest. Mi rol principal fue el desarrollo de la API y la lógica de integración, utilizando Prisma como ORM para gestionar la base de datos y conectar eficazmente el backend con la interfaz en React.",
      en: "Visual discovery platform similar to Pinterest. My primary role was API development and integration logic, using Prisma as an ORM to manage the database and effectively connect the backend to the React frontend.",
    },
    tech: ["React", "Node.js", "Prisma", "PostgreSQL/MySQL", "REST API"],
    challenge: {
      es: "Arquitectar y desarrollar una API robusta para comunicar la base de datos (vía Prisma) con el frontend existente, gestionando estados complejos como likes, comentarios y colecciones de usuario de forma eficiente.",
      en: "Architecting and developing a robust API to communicate the database (via Prisma) with the existing frontend, managing complex states like likes, comments, and user collections efficiently.",
    },
    features: {
      es: [
        "Desarrollo de endpoints REST para la interacción de datos.",
        "Implementación de Prisma para consultas optimizadas a la base de datos.",
        "Sistema de autenticación y perfiles de usuario.",
        "Gestión de interacciones sociales (likes, comentarios, guardados) desde el servidor.",
      ],
      en: [
        "REST endpoint development for data interaction.",
        "Prisma implementation for optimized database queries.",
        "User authentication and profile management.",
        "Server-side management of social interactions (likes, comments, saves).",
      ],
    },
    media: [
      {
        type: "image",
        url: "/assets/projects/Pixplore/Px1.png",
      },
    ],
    link: "",
    repo: "https://github.com/WikkArt/PIA_PW2",
  },

 /* {
    id: 4,
    title: "Komorebi",
    role: {
      es: "Desarrolladora Fullstack",
      en: "Fullstack Developer",
    },
    focus: {
      es: "Álbum digital privado, gestión de contenido multimedia, autenticación segura",
      en: "Private digital album, multimedia content management, secure authentication",
    },
    year: "2026",
    description: {
      es: "Espacio digital privado diseñado como un álbum de recuerdos compartido, que permite la visualización de imágenes, la creación de cartas personalizadas y la reproducción de música, manteniendo la privacidad mediante un sistema de autenticación restringido.",
      en: "Private digital space designed as a shared memory album, allowing for image viewing, personalized letter creation, and music playback, maintaining privacy through a restricted authentication system.",
    },
    tech: ["React", "Firebase (Auth, Storage, Firestore)", "CSS"],
    challenge: {
      es: "Implementar un sistema de autenticación privada para restringir el acceso exclusivo a los administradores del álbum, gestionando simultáneamente la carga y visualización segura de archivos multimedia en tiempo real.",
      en: "Implementing a private authentication system to restrict exclusive access to the album administrators, while managing the secure upload and real-time visualization of multimedia files.",
    },
    features: {
      es: [
        "Sistema de autenticación privada exclusivo para usuarios autorizados.",
        "Álbum de imágenes interactivo.",
        "Módulo de creación y almacenamiento de cartas digitales.",
        "Reproductor de música integrado para una experiencia inmersiva.",
      ],
      en: [
        "Private authentication system exclusive to authorized users.",
        "Interactive image album.",
        "Digital letter creation and storage module.",
        "Integrated music player for an immersive experience.",
      ],
    },
    media: [{ type: "image", url: "/assets/projects/Komorebi/Kb1.png" }],
    link: "",
    repo: "https://github.com/CeleAguilar-rgb/Komorebi",
  },*/
];
