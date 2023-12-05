import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MicronetUnion from "@/public/Micronet-union.png";
import zhihu from "@/public/zhihu-daily.png";
import forkify from "@/public/forkify.jpg";
import taskoa from "@/public/task-oa.jpg";
import music from "@/public/music.jpg";
import incomponent from "@/public/interesting-components.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from University of Electronics and the Sciences of China",
    description:
      "During my university studies, I focused on professional courses such as data structures and algorithms, computer operating systems, computer networks, etc. I primarily used C language and Python for coursework. In my third year, I delved into web development, gaining proficiency in both frontend and backend technologies. I developed a preference for frontend development as it provides a greater sense of accomplishment for me, so I started to deepen my knowledge in frontend web development, learning JavaScript, React, and related technologies. finally get bachelor of Computer Science, 2022",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "SDE INTERN",
    description:
      "I worked as SDE INTERN In a Fast-Growing Company responsible for maintaining internal company systems and fix no time-sensitive Bugs also write test case for company's API.",
    icon: React.createElement(CgWorkAlt),
    date: "2022.5 - 2022.7",
  },
  {
    title: "SDE-junior",
    description:
      "After completing my internship with excellent performance, I successfully transitioned to a permanent position. I began contributing code as a core frontend developer for new features in the internal company systems. Approximately six months later, I took the lead on the company's official website project and participated in the reconstruction of the after-sales system. Both projects yielded positive results, with the official website receiving widespread praise from clients and colleagues.The reconstructed after-sales system also earned strong thumbs up from colleagues in the relevant departments.",
    icon: React.createElement(FaReact),
    date: "2022.7 - 2023.10",
  },
  {
    title: "Freelancer Front-end Developer",
    description:
      "It's been a great experience work in my previous company with great manager and colleagues, But I believe I've reached a point where I'm ready for new challenges and opportunities for personal and professional growth. So, I am currently seeking new employment opportunities. In the meantime, I am working as a freelancer, providing software development services to my clients.",
    icon: React.createElement(FaReact),
    date: "2023.10 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Zhihu Daily",
    description:
      "An article reader webapp, delivers articles daily spanning a wide array of topics and subject matters, has many functionalities like login logout, preserve login state, update profile, file upload, add posts to favorites, etc.",
    tags: ["React", "Ant-Design", "React-router", "Redux", "Redux-Saga"],
    imageUrl: zhihu,
  },
  {
    title: "Company's Website",
    description:
      "My previous company’s official responsible website, has fascinating responsible components like the carousel, sticky navigation bar, Smooth scrolling anchor, timeline for company.",
    tags: ["Webcomponent", "Sass", "Swiper", "Tailwind"],
    imageUrl: MicronetUnion,
  },
  {
    title: "TASK OA",
    description:
      "A simple TODO-list Web app, provides functionality for fundamental Create, search, filter, Update and Delete tasks management.",
    tags: ["React", "Sass", "Ant-Deign", "Redux"],
    imageUrl: taskoa,
  },
  {
    title: "Musician",
    description:
      "A web app that allows users to play, upload, comment, and share their own music files, has many functionalities like login logout, preserve login state, comment, file upload, etc.",
    tags: ["Vue", "Pinia", "Vue Router", "Tailwindcss", "Firebse"],
    imageUrl: music,
  },
  {
    title: "Forkify",
    description:
      "A web app for cooking recipes use MVC pattern that enables users to create ,read, search, Update and Delete their own recipes.",
    tags: ["Javascript", "Sass", "Html"],
    imageUrl: forkify,
  },
  {
    title: "Interesting Components",
    description:
      "A collection of components which have amazing animation and fantastic styles, or some webAPI demos build by vailla javascript",
    tags: ["Javascript", "Sass", "Html"],
    imageUrl: incomponent,
  },
] as const;

export const skillsData = [
  "React",
  "Redux",
  "HTML",
  "CSS",
  "Sass",
  "Less",
  "Tailwind",
  "Swiper",
  "JavaScript",
  "TypeScript",
  "NodeJs",
  "Node.js",
  "Webpack",
  "Nginx",
  "vue",
  "Git",
  "Mysql",
  "MongoDB",
] as const;
