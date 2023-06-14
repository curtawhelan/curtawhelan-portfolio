import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Trek Track",
    description:
      "Trek Track is an iOS application that is designed to help people motivate people with the completion of otherwise mundane tasks",
    image: "/trektrack-logo.png",
    github:
      "https://github.com/ukcs485gFall2022/final-project-client-curtawhelan",
  },
  {
    name: "The Human Domino Effect",
    description:
      "The Human Domino Effect is a table top video game developed using the Godot game engine",
    image: "/human-domino-effect.png",
    github: "https://github.com/Samu100/domino-effect",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((projects, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Image
                      src={projects.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{projects.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {projects.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={projects.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
