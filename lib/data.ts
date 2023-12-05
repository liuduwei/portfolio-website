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
    location: "China",
    description: "get bachelor of Computer Science, 2022",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "SDE INTERN",
    location: "China",
    description:
      "I worked as SDE INTERN In a Fast-Growing Company responsible for maintaining In-house systems and fix no time-sensitive Bugs also write test case for company's API",
    icon: React.createElement(CgWorkAlt),
    date: "2022.5 - 2022.7",
  },
  {
    title: "SDE-1",
    location: "China",
    description: "Responsible for build and maintain Company's project.",
    icon: React.createElement(FaReact),
    date: "2022.7 - 2022.10",
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
      "The company’s official responsible website, has fascinating responsible components like the carousel, sticky navigation bar, Smooth scrolling anchor, timeline for company.",
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
    title: "Interesting Components",
    description:
      "A collection of components which have amazing animation and fantastic styles, or some webAPI demos build by vailla javascript",
    tags: ["Javascript", "Sass", "Html"],
    imageUrl: incomponent,
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
