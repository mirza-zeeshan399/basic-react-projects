function generateRandomKey() {
  return Math.random() * 1000;
}

export const navbarSections = [
  {
    title: "Home",
    link: "/home",
    id: 1,
    subSections: [],
  },
  {
    title: "About",
    link: "/about",
    id: 2,
    subSections: [
      {
        title: "Company History",
        link: "/about/history",
        id: generateRandomKey(),
        subSections:[
          {title: 'HEEEY'}
        ]
      },
      { title: "Our Team", link: "/about/team", id: generateRandomKey() },
      {
        title: "Mission & Vision",
        link: "/about/mission-vision",
        id: generateRandomKey(),
      },
      { title: "Careers", link: "/about/careers", id: generateRandomKey() },
    ],
  },
  {
    title: "Services",
    link: "/services",
    id: 3,
    subSections: [
      {
        title: "Marketing",
        link: "/services/category1",
        id: generateRandomKey(),
      },
      {
        title: "Development",
        link: "/services/category2",
        id: generateRandomKey(),
      },
    ],
  },
  {
    title: "Portfolio",
    link: "/portfolio",
    id: 4,
    subSections: [
      {
        title: "Case Studies",
        link: "/portfolio/case-studies",
        id: generateRandomKey(),
      },
      {
        title: "Completed Projects",
        link: "/portfolio/completed",
        id: generateRandomKey(),
      },
      {
        title: "Ongoing Projects",
        link: "/portfolio/ongoing",
        id: generateRandomKey(),
      },
    ],
  },
  {
    title: "Blog",
    link: "/blog",
    id: 5,
    subSections: [
      { title: "Latest Posts", link: "/blog/latest", id: generateRandomKey() },
      {
        title: "Categories",
        link: "/blog/categories",
        id: generateRandomKey(),
      },
      { title: "Archives", link: "/blog/archives", id: generateRandomKey() },
    ],
  },
];
