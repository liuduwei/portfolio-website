import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MicronetUnion from "@/public/Micronet-union.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Micronet-Union Website",
    description:
      "I Created the Company's official website from scratch which contains several responsive webviews that are honored by colleagues and customers, Significantly enhancing the company image.",
    tags: ["Webcomponent", "Sass", "Swiper", "Tailwind", "Prisma"],
    imageUrl: MicronetUnion,
  },
  {
    title: "After Sales Management System",
    description:
      "I worked as front-end team leader dev on company's After Sales Management System for 1 year, create it from scratch, Integrated Lark and WeChat as Third-Party cognito for authentication. Increased the efficiency of the after-sales department by 180% and customer satisfaction with after-sales service by 30%.",
    tags: [
      "create-react-app",
      "React",
      "TypeScript",
      "Ant-Design",
      "React-router",
      "Redux",
      "Redux-Saga",
    ],
    imageUrl: rmtdevImg,
  },
  {
    title: "Supply Chain Management System",
    description:
      "Responsible for the Front-End development of the core modules of the Supply Chain Management System (Purchasing Process, Order Management, lifecycle of vendors) containing complex business logic.",
    tags: [
      "create-react-app",
      "React",
      "JavaScript",
      "Ant-Design",
      "React-router",
      "Redux",
    ],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "Less",
  "Swiper",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Node.js",
  "Webpack",
  "Git",
  "Tailwind",
  "MongoDB",
] as const;
