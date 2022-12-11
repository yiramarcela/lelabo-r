export const MENU = [
  {
    title: "À La Une ou Accueil?",
    path: "/",
  },
  {
    title: "Le Salon",
    path: "/lesalon",
    submenu: [
      {
        title: "Balado",
        path: "/lesalon?balado",
      },
      {
        title: "Videos",
        path: "/lesalon?video",
      },
      {
        title: "Expositions",
        path: "/lesalon?expositions",
      },
    ]
  },
  {
    title: "Le Programme",
    path: "/Auprogramme",
  },
  {
    title: "Les Services",
    path: "/services",
    submenu: [
      {
        title: "Formation",
        path: "/services?formation",
      },
      {
        title: "Location",
        path: "/services?location",
      },
      {
        title: "Studio",
        path: "/services?studio",
      },
    ],
  },
  {
    title: "La Communautée",
    path: "/Lacommunautee",
    submenu: [
      {
        title: "Nos Membres",
        path: "/Lacommunautee/nos",
      },
      {
        title: "Devenir",
        path: "/lacommunautee/devenir",
      },
      {
        title: "Benevolat",
        path: "/lacommunautee?benevolat",
      },
    ],
  },
  {
    title: "Appels et Ressources",
    path: "/Ressources",
    submenu: [
      {
        title: "Appels",
        path: "/ressources?appels",
      },
    ],
  },
  {
    title: "Espace Presse",
    path: "/Presse",
    submenu: [
      {
        title: "communiqué De Presse",
        path: "/presse?communiqueDePresse",
      },
      {
        title: "Dossier",
        path: "/presse?dossier",
      },
    ],
  },
  {
    title: "À Propos",
    path: "/Apropos",
    submenu: [
      {
        title: "Mission",
        path: "/Apropos/mission",
      },
      {
        title: "Historie",
        path: "/Apropos/history",
      },
      {
        title: "Equipe",
        path: "/Apropos/equipe",
      },
      {
        title: "Contact",
        path: "/Apropos/contact",
      },
      {
        title: "Dons",
        path: "/Apropos/dons",
      },
    ],
  },
];
