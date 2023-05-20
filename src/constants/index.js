import {
  csharp,
  mobile,
  backend,
  creator,
  ag,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  rit,
  demon,
  genie,
  koala,
  pepewow,
  threejs,
  unity,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  { id: "resume", title: "Resume" },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Interactive Developer",
    icon: creator,
  },
];

const plugins = [
  {
    name: "LinkedIn",
    icon: "",
    link: "https://www.linkedin.com/in/stanley-louie-523136127/",
  },
  {
    name: "Github",
    icon: "",
    link: "https://github.com/Iouie",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "Unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "Interactive Developer Intern",
    company_name: "American Greetings",
    icon: ag,
    iconBg: "#383E56",
    date: "Aug 2021 - May 2022",
    points: [
      "Collaborated with a team of 5+ developers and designers to develop cutting-edge, responsive web applications while adhering to industry best practices",
      "Produced 10+ semantically structured electronic-cards, catering to the needs of 2000+ daily users while ensuring smooth operation and maintenance",
      "Leveraged SCRUM and other agile methodologies for project management, leading to streamlined workflows and improved productivity",
    ],
  },
  {
    title: "Dining Assistant",
    company_name: "RIT Sportszone",
    icon: rit,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Jan 2020",
    points: [
      "Trained and supervised 10+ new student workers across multiple workstations, achieving a 20% increase in productivity and efficiency of food sales",
      "Maintained a high level of customer satisfaction by consistently providing friendly and efficient order-taking service",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Implemented inventory management strategies to optimize stock levels, minimize waste, and reduce profit loss",
    ],
  },
];

const projects = [
  {
    name: "Gaming Genie",
    description:
      "Gaming Genie is an interactive web application that uses MMOBomb's API in order to grab gaming related news, gaming giveaways, and information on games. Users are able to filter out or search a game of their choice to get more information on their game.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "flexbox",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "white-text-gradient",
      },
    ],
    image: genie,
    source_code_link: "https://github.com/Iouie/PScholas-Proj2",
    demo_link: "https://dainty-cobbler-2526e0.netlify.app/",
  },
  {
    name: "Know Your Pepe",
    description:
      "Know Your Pepe is a memory card game that utilizes our favorite meme Pepe and all his gifs. Users are timed while matching pepe gifs and will place on local highscores if their time is short enough.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html/css",
        color: "green-text-gradient",
      },
      {
        name: "dom",
        color: "pink-text-gradient",
      },
      {
        name: "localstorage",
        color: "white-text-gradient",
      },
    ],
    image: pepewow,
    source_code_link: "https://github.com/Iouie/Know-Your-Pepe",
    demo_link: "https://iouie.github.io/Know-Your-Pepe/",
  },
  {
    name: "Demon Audio Visualizer",
    description:
      "A demon themed audio visualizer that displays visuals based on a music files frequency with many other options.",
    tags: [
      {
        name: "canvas/audio api",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: demon,
    source_code_link: "https://github.com/Iouie/AudioVisualizer",
    demo_link:
      "https://people.rit.edu/sxl7953/IGME330/Project/Visualizer/Visualizer.html?",
  },
  {
    name: "Koala Quest",
    description:
      "Web based application where users can find many animations in a koala's habitat.",
    tags: [
      {
        name: "pixijs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "texturepacker",
        color: "pink-text-gradient",
      },
    ],
    image: koala,
    source_code_link: "https://www.jacquielawson.com/card/koala-quest/3536089",
    demo_link: "https://www.jacquielawson.com/card/koala-quest/3536089",
  },
];

export { services, technologies, experiences, projects };
