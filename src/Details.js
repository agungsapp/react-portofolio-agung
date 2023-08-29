// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/pas.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
// import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
// import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import laravel from "./assets/techstack/laravel.png";
import codeigniter from "./assets/techstack/codeigniter.png";
// Porject Images
// import projectImage1 from "./assets/projects/project1.jpg";
// import projectImage2 from "./assets/projects/project2.jpg";
// import projectImage3 from "./assets/projects/project3.jpg";
// import projectImage4 from "./assets/projects/project4.jpg";
// import projectImage5 from "./assets/projects/project5.jpg";
// import projectImage6 from "./assets/projects/project6.jpg";

// Portofolio Image
import portofolioImage1 from "./assets/portofolio/porto-psiki-web.jpg";
import portofolioImage2 from "./assets/portofolio/porto-laporan-keuangan.jpg";
import portofolioImage3 from "./assets/portofolio/porto-lms.jpg";
import portofolioImage4 from "./assets/portofolio/porto-silaprak.jpg";
import portofolioImage5 from "./assets/portofolio/porto-jetoz-steel.jpg";
import portofolioImage6 from "./assets/portofolio/porto-prima-flora.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Agung Saputra",
  tagline: "I'm a Web Developer",
  img: profile,
  about: `Hello. Introduce my name is Agung Saputra, I am a website developer, I like to learn new technologies and try to apply them, I have no other hobby than coding. I always try to complete the work assigned to me quickly and accurately. I always prioritize every trust given to me, because for me a trust that I do well is an achievement for me.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/agungsapp/",
  github: "https://github.com/agungsapp",
  twitter: "https://twitter.com/aguungsap",
  instagram: "https://www.instagram.com/agungsapp",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Web Developer",
    Company: `CV. Jetoz Steel`,
    Location: "Central Lampung",
    Type: "Freelance",
    Duration: "Sep 2022 - Oct 2022",
  },
  {
    Position: "Web Developer",
    Company: `CV. Prima Flora Nursery`,
    Location: "Bandar Lampung City",
    Type: "Freelance",
    Duration: "Jan 2022 - Feb 2022",
  },
  // {
  //   Position: "Frontend Web Developer",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Full Time",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Informatic Engineering",
    Company: `Institute Informatic and Business Darmajaya`,
    Location: "Bandar Lampung City",
    Type: "Full Time",
    Duration: "Sep 2018 - May 2023",
  },
  {
    Position: "Learn Basic Web Programming",
    Company: "Dicoding",
    Location: "Online",
    Type: "Full Time",
    Duration: "05 - Sep - 2022",
  },
  {
    Position: "Learn Basic JavaScript Programming",
    Company: "Dicoding",
    Location: "Online",
    Type: "Full Time",
    Duration: "20 - Oct - 2022",
  },
  {
    Position: "Cloud Practitioner Essentials (Learn AWS Cloud Basics)",
    Company: "Dicoding",
    Location: "Online",
    Type: "Full Time",
    Duration: "24 - Feb - 2023",
  },
  {
    Position: "SQL (Intermediate)",
    Company: "HackerRank",
    Location: "Online",
    Type: "Full Time",
    Duration: "26 - Feb - 2023",
  },
  {
    Position: "Junior Web Developer",
    Company: "Vocational School Graduate Academy",
    Location: "Hybrid",
    Type: "Full Time",
    Duration: "20 Mar 2023 - 3 Apr 2023 | 63 Hours Of Training",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: false,
  sass: false,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  laravel: laravel,
  codeigniter: codeigniter,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Psiki Web",
    image: portofolioImage1,
    description: `Psychic Web is a website page for analyzing the symptoms of mental illness suffered by a person by conducting a psychological test and utilizing the Naive Bayes algorithm.`,
    techstack: "TailWind CSS, CodeIgniter 4",
    previewLink: "#",
    githubLink: "https://github.com/agungsapp/psiki-web-codeigniter",
  },
  {
    title: "Point Of Sales",
    image: portofolioImage2,
    description: `The Ny Fifin store Point Of Sales application helps cake shops improve sales efficiency and stock management with an intuitive interface and real-time reports.`,
    techstack: "Bootstrap 5, JQuery, Laravel 9",
    previewLink: "#",
    githubLink: "https://github.com/agungsapp/Aplikasi-Keuangan-Laravel",
  },
  {
    title: "LMS (Learning Management System)",
    image: portofolioImage3,
    description: `A Learning Management System (LMS) is a software platform to facilitate the process of managing, delivering and tracking learning online.`,
    techstack: "Bootstrap 5, Laravel 9",
    previewLink: "#",
    githubLink: "https://github.com/bagusiyo99/lms",
  },
  {
    title: `Silaprak Application`,
    image: portofolioImage4,
    description: `This application is an application developed to facilitate the Darmajaya IIB campus in managing practicum activities carried out by students.`,
    techstack: "Bootstrap 5, CodeIgniter 5",
    previewLink: "#",
    githubLink: "https://github.com/agungsapp/silaprak",
  },
  {
    title: "CRM Application",
    image: portofolioImage5,
    description: `CRM is a software-based solution specifically designed to build strong relationships with Pertamina's customers at CV. Jetoz Steel.`,
    techstack: "Bootstrap 4, PHP Native, JQuery",
    previewLink: "#",
    githubLink: "#",
  },
  {
    title: "Simple E - Commerce Website",
    image: portofolioImage6,
    description: `This is an online store website page created for CV. Prima Flora in facilitating the management of ornamental plant rentals.`,
    techstack: "Bootstrap 4, PHP Native",
    previewLink: "#",
    githubLink: "https://github.com/agungsapp/primaflora",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "agungsapp27@gmail.com",
  phone: "+62 858 3902 3590",
};
