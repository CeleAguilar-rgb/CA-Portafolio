export const projectsData = [
  {
    id: 1,
    title: "MiauChat", 
    role: {
      es: "Fullstack Architect & Lead Developer",
      en: "Fullstack Architect & Lead Developer"
    },
    focus: {
      es: "Arquitectura E2E, sincronización de datos, videollamadas P2P",
      en: "E2E architecture, data synchronization, P2P video calls"
    },
    year: "2023",
    description: {
      es: "Ecosistema de comunicación social y productividad con identidad visual felina que integra mensajería instantánea, videollamadas y herramientas de colaboración grupal.",
      en: "Social communication and productivity ecosystem with a feline visual identity that integrates instant messaging, video calls, and group collaboration tools."
    },
    tech: ["React", "Socket.io", "WebRTC", "Node.js", "Express", "Firebase"],
    challenge: {
      es: "Liderar la arquitectura integral (E2E) de forma autónoma, sincronizando flujos de datos complejos entre mensajería instantánea, señalización P2P para videollamadas y gestión de tareas sin supervisión.",
      en: "Leading the end-to-end (E2E) architecture autonomously, synchronizing complex data flows between instant messaging, P2P signaling for video calls, and task management without supervision."
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
      ]
    },
    media: [
      { type: "image", url: "/assets/projects/MiauChat.png" },
      { type: "video", url: "/assets/projects/miau-demo.mp4" },
      { type: "image", url: "/assets/projects/miau-2.jpg" },
    ],
    link: "#",
    repo: "#",
  },
];
