import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  figma,
  isc,
  msync,
  kemendikbud,
  jagat,
  msyncweb,
  threejs,
  git,
  redux,
  crtv,
  rubikgame,
  othellosm,
  tetris,
  skybreez,
  tenso,
  syncwave,
  speedytype,
  web3task,
  dbcom,
  me,
  mon,
  mona,
  mone,
  moni,
  mono,
  monu,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Freelancer",
    icon: backend,
  },
  {
    title: "Mentor",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences: TExperience[] = [
  {
    title: "Founder",
    companyName: "Matrix Sync",
    icon: msync,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Designing UI/UX for 100+ Client (National and International)",
      "Developing and maintaining web applications for client using React js, Vue js, Node js, Wordpress and other related technologies",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility with Figma and Framer",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Crafting articles on technology, coding and UI UX tutorials, design, and coding tools on Medium (600+ Claps)",
      "Deploy Client Website use costum domain, hosting premium and educate my client with SEO Management",
    ],
  },
  {
    title: "Expert Team IT",
    companyName: "Kementrian Pendidikan dan Kebudayaan RI",
    icon: kemendikbud,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Fixed their Asesment Website using HTML, CSS, Javascript and Nginx with team",
      "Quality Assurance for new website and App Kemendikbud (App Simulation Exam, Snbppp, and web helpdesk)",
      "Created best UI designs for the Seleksi Nasional Penerimaan Mahasiswa Baru website",
      "Provided helpdesk support for the Asesmen Nasional Berbasis Komputer website",
      "Developed Asesmen Nasional Berbasis Komputer test questions",
      "Developed a mobile application “Tes Bakat Minat” for accessing exam questions and simulations using Tailwind CSS and Vue.js as the main tech stack.",
      "Created detailed project timeline reports to support budget disbursement and ensure alignment with actual project progress",
      "Responsible for inputting and managing exam content within the application and performing regular application maintenance to ensure system reliability",
    ],
  },
  {
    title: "Quality Assurance",
    companyName: "Jagat App",
    icon: jagat,
    iconBg: "#383E56",
    date: "Feb 2023 - Jun 2023",
    points: [
      "Perform user login testing to identify potential bugs within the application.",
      "Verify the applications stability and ensure optimal performance across all features",
      "Contribute to game design improvements, troubleshoot bugs, and resolve server-side issues",
    ],
  },
  {
    title: "IT Mentor",
    companyName: "Informatics Study Club",
    icon: isc,
    iconBg: "#E6DEDD",
    date: "Okt 2024 - Present",
    points: [
      "Guiding students through the initial steps of creating design websites and development a web app",
      "I cover essential aspects like selecting appropriate color schemes, wireframe, prototyping multi-page designs, and translating designs into code",
      "Guilding the steps to become a frontend developer, and foundational knowledge in HTML, CSS, and JavaScript, along with an introduction to relevant frameworks",
      "Make a responsive design for website and application",
      "Guidance on effective tips and strategies to secure quality remote job opportunities through LinkedIn, including how to optimize LinkedIn profiles to attract attention from company HR representatives",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Working with Malika was a fantastic experience. She delivered intuitive designs and clean, efficient code that elevated our project beyond expectations",
    name: "Kelan Samudera",
    designation: "Software Engineer",
    company: "Paralax.co",
    image: mon,
  },
  {
    testimonial:
      "Malika has an exceptional eye for detail and user experience. Her designs are not only visually stunning but also highly functional and user-friendly.",
    name: "Marvel Haris",
    designation: "IT Director",
    company: "Igloo Inc",
    image: mona,
  },
  {
    testimonial:
      "Throughout the project, Malika demonstrated outstanding professionalism, creativity, and technical expertise. She truly brings ideas to life with precision and care",
    name: "Maris Azure",
    designation: "CEO",
    company: "Oceana",
    image: mone,
  },
  {
    testimonial:
      "As a Owner Matrix Sync, Malika ability to translate complex requirements into elegant designs and responsive frontend solutions made a significant impact on our products success",
    name: "Skylar Wade",
    designation: "Backend Developer",
    company: "Mashoa Ltd",
    image: moni,
  },
  {
    testimonial:
      "What sets Malika apart is her ability to balance beautiful aesthetics with seamless functionality. She is an absolute pleasure to work with and highly reliable",
    name: "Hale Benned",
    designation: "Supervisor",
    company: "Bolobolo",
    image: mono,
  },
  {
    testimonial:
      " Malika work ethic, design skills, and technical proficiency consistently exceeded our expectations. I would highly recommend her for any UI/UX or frontend development needs",
    name: "Marina Skye",
    designation: "Tech Mentor",
    company: "Freetech",
    image: monu,
  },
];

const projects: TProject[] = [
  {
    name: "Matrix Sync",
    description:
      "Is a brand I founded with the vision to help many people create various responsive and engaging applications or web designs. I initiated this project to open for designers, developers, and businesses",
    tags: [
      {
        name: "Web Design",
        color: "blue-text-gradient",
      },
      {
        name: "Freelancer",
        color: "green-text-gradient",
      },
      {
        name: "Frontend",
        color: "pink-text-gradient",
      },
    ],
    image: msyncweb,
    sourceCodeLink: "https://tech.msync.my.id/",
  },
  {
    name: "Creative Landing Page",
    description:
      "This is Self Project design for MSync. I started this journey to empower businesses, startups, and personal brands to create visually striking digital presences that drive engagement and real results",
    tags: [
      {
        name: "Design",
        color: "blue-text-gradient",
      },
      {
        name: "Developer",
        color: "green-text-gradient",
      },
      {
        name: "Copywriting",
        color: "pink-text-gradient",
      },
    ],
    image: crtv,
    sourceCodeLink: "https://dribbble.com/msync",
  },
  {
    name: "Rubik Game 3D",
    description:
      "Self project to presents Game Main Rubik, an interactive 3D Rubiks Cube game designed to challenge users and enhance their logical thinking skills. Built to deliver a fun yet realistic cube-solving experience",
    tags: [
      {
        name: "Three JS",
        color: "blue-text-gradient",
      },
      {
        name: "Game",
        color: "green-text-gradient",
      },
      {
        name: "Rubik 3D",
        color: "pink-text-gradient",
      },
    ],
    image: rubikgame,
    sourceCodeLink: "https://mainrubik.msync.my.id/",
  },
  {
    name: "Othello Game",
    description:
      "Self project introduces OthelloSM, a strategic web-based board game that challenges players to think ahead and outsmart their opponents. Developed to showcase interactive design and smooth gameplay.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Game",
        color: "green-text-gradient",
      },
      {
        name: "Othello CSS",
        color: "pink-text-gradient",
      },
    ],
    image: othellosm,
    sourceCodeLink: "https://othellosm.msync.my.id/",
  },
  {
    name: "Tetr1s Game",
    description:
      "Tetr1s self project, a classic-inspired block stacking game crafted to hand-eye coordination skills. Designed with smooth controls and engaging visuals, responsive, and creative web-based gaming experiences",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Game",
        color: "green-text-gradient",
      },
      {
        name: "Block",
        color: "pink-text-gradient",
      },
    ],
    image: tetris,
    sourceCodeLink: "https://tetr1s.msync.my.id/",
  },
  {
    name: "Weather App",
    description:
      "SkyBreez, a modern weather application designed to provide real-time forecasts with an elegant and intuitive interface. Created to deliver accurate data and a seamless user experience and responsive design.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Weather App",
        color: "green-text-gradient",
      },
      {
        name: "Vue JS",
        color: "pink-text-gradient",
      },
    ],
    image: skybreez,
    sourceCodeLink: "https://skybreez.msync.my.id/",
  },
  {
    name: "Speedy Type",
    description:
      "Speedy Type, a typing speed test web application that challenges users to type random words accurately across three difficulty levels. Designed to improve typing skills and enhance focus user for writing.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Typer App",
        color: "green-text-gradient",
      },
      {
        name: "Vanilla JS",
        color: "pink-text-gradient",
      },
    ],
    image: speedytype,
    sourceCodeLink: "https://codepen.io/icecoffie/full/LEYKYmR",
  },
  {
    name: "Syncwave Music App",
    description:
      "Sync Wave, a music application that allows users to explore songs and playlists through a dynamic swipe card experience intuitive navigation with vibrant design and interactive audio-driven platforms.",
    tags: [
      {
        name: "Swiper",
        color: "blue-text-gradient",
      },
      {
        name: "Music App",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: syncwave,
    sourceCodeLink: "https://syncwave.msync.my.id",
  },
  {
    name: "Object Detection",
    description:
      " web application powered by TensorFlow to recognize and classify objects through a live camera feed. Created to showcase machine learning integration in web platforms blending innovation, accessibility, and modern technology.",
    tags: [
      {
        name: "Tensor-flow",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Simple YOLO",
        color: "pink-text-gradient",
      },
    ],
    image: tenso,
    sourceCodeLink: "https://codepen.io/icecoffie/full/dPyvQwZ",
  },
  {
    name: "Web3task",
    description:
      " Web3Task, Super web decentralized task management platform built on blockchain technology to ensure transparency, security, and trust. evolving Web3 ecosystem",
    tags: [
      {
        name: "Crypto",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "green-text-gradient",
      },
      {
        name: "Super App",
        color: "pink-text-gradient",
      },
    ],
    image: web3task,
    sourceCodeLink: "https://dribbble.com/msync",
  },
  {
    name: "Dashboard Admin",
    description:
      " Make a comprehensive web application designed to streamline online store management by providing real-time analytics, inventory tracking, and customer insights",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Admin",
        color: "pink-text-gradient",
      },
    ],
    image: dbcom,
    sourceCodeLink: "https://github.com/icecoffie/Dashboard-Admin-Paling-Fix",
  },
  {
    name: "For More My Project",
    description:
      " showcases a growing portfolio of diverse projects, ranging from web applications and creative digital experiences. MSync impactful solutions across industries, high-quality, innovative.",
    tags: [
      {
        name: "For More",
        color: "blue-text-gradient",
      },
      {
        name: "Designer",
        color: "green-text-gradient",
      },
      {
        name: "Developer",
        color: "pink-text-gradient",
      },
    ],
    image: me,
    sourceCodeLink:
      "https://docs.google.com/spreadsheets/d/1HW74irhD2jY6tB8tICd1cDfhb3MrZ2xdQ8qoQMSzSVo/edit?usp=sharing",
  },
];

export { services, technologies, experiences, testimonials, projects };
