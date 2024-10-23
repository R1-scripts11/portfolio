export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const method = [
  {
    id:1,
    title:"Planification",
    content:"Rédaction du cahier des charges, gestion du développement selon la méthodologie Agile avec Kanban (via Trello) et estimation des temps de travail. Création des maquettes de la base de données (diagramme UML) et de l'interface utilisateur.",
    canva_animationSpeed:5.1,
    containerClassName:"bg-emerald-900 rounded-3xl overflow-hidden",
    btnTitle:"Phase 1"
  },
  {
    id:2,
    title:"Développement",
    content:"Mise en place de l'environnement de développement (avec Docker si nécessaire) ainsi que de la base de données. Développement du backend, implémentation des fonctionnalités et réalisation des tests. Développement du frontend. Organisation de points hebdomadaires avec le client pour obtenir des retours réguliers et garantir une flexibilité dans le projet.",
    canva_animationSpeed:3,
    containerClassName:"bg-pink-900 rounded-3xl overflow-hidden",
    colors:[[255, 166, 158],[221, 255, 247],],
    dotSize:2,
    btnTitle:"Phase 2"
  },
  {
    id:3,
    title:"Intégration & Lancement",
    content:"Mise en place des environnements de préproduction et de production (facilité par l'utilisation de Docker). Déploiement de l'application, suivi par une phase de surveillance et de maintenance pour résoudre les bugs et effectuer les modifications demandées par le client, après validation par le Product Owner (PO) ou les développeurs.",
    canva_animationSpeed:3,
    containerClassName:"bg-sky-600 rounded-3xl overflow-hidden",
    colors:[[125, 211, 252]],
    btnTitle:"Phase 3"
  }

]

export const gridItems = [
  {
    id: 1,
    title: "Je privilégie la communication avec le client",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/erwancomputer.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Portfolio fait avec les composants d'Aceternity",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Ma stack technique",
    description: "J'essaie constamment de m'améliorer",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionné de technologie et de développement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Développement d'un blog actuellement",
    description: "Projet en court...",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Vous souhaitez démarrer un projet ensemble ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Blog pour regrouper les connaissances",
    des: "Le blog est fait avec React Express Bootstrap et bientôt Next JS !. En cours de création",
    img: "/Blog.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Documentation de grappling",
    des: "Une documentation qui regroupe des techniques de grappling pour les adeptes du combat au sol !",
    img: "/grappling.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "/https://r1documentation.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Développeur Full Stack -📄 Alternance  -🕣 3 ans ",
    desc: "Maintenance et ajout de fonctionnalités et développement de nouveaux logiciels  sur le parc applicatif interne et développement d'interfaces hommes machine sur les robots, au sein de la société FANUC FRANCE à Lisses. Technologies utilisées : PHP,HTML,CSS,Javascript,Bash,PS,KAREL",
    className: "md:col-span-4",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développeur Full Stack -📄 Stage  -🕣 2 mois ",
    desc: "Stage de deux mois ou j'ai développé en collaboration un CRM pour la gestion d'une école. Symfony / Bootstrap",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Développeur passionée",
    desc: "Je développe aussi sur mon temps libre, car j'aime ça.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/R1-scripts11"
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/erwan-durand-755793205/"
  }
];
