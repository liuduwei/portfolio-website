"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated from the University of Electronic Science and Technology of
        China in 2022 with a Bachelor's Degree in{" "}
        <span className="font-medium"> Computer Science</span>. Following
        graduation, I joined a Fast-Growing company's IT team as a{" "}
        <span className="font-medium"> software develop engineer</span> and have
        been there for the past two years. During that time my web development
        and coding skill have grown steadily, particularly in the realm of{" "}
        <span className="font-medium">front-end development</span>. It’s been a
        great experience, but I’ve run out of room to grow and I’m{" "}
        <span className="font-medium">looking for new opportunities.</span>{" "}
        {/* <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. */}
        My core stack is{" "}
        <span className="font-medium">ReactJS and it's ecosystem</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my guitar.
      </p>
    </motion.section>
  );
}
