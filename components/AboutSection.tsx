import React from "react"

const skills = [
  { skill: "HTML5" },
  { skill: "CSS 3" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "SQL" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "C#" },
  { skill: "Unity" },
  { skill: "Swift" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretched justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I graduated from the University of Kentucky in 2022 with a
              Bachelors Degree in Computer Science and am looking to start my
              career in Software Engineering
            </p>
            <br />
            <p>
              {" "}
              I have always had a{" "}
              <span className="font-bold text-teal-600">
                love for computers
              </span>
              , but my passion truly started when I built my first desktop PC at
              the age of 14. Ever since then, I have been drawn to{" "}
              <span className="font-bold text-teal-600">
                understanding how computers function
              </span>{" "}
              and exploring ways to utilize them to impact those around me. By
              acting as their personal IT guy, I have introduced many friends to
              PC gaming. <i>Despite</i> the frustrations that come along with
              computers,{" "}
              <span className="font-bold text-teal-600">
                I live for those moments when everything comes together and
                works
              </span>
            </p>
            <br />
            <p>
              Most of my hobbies involve a computer, such as playing video games
              with my friends, indulging in my crippling Wikipedia addiction, or
              learning a new skill such as Front-End Development. Outside of
              technology I enjoy skateboarding, collecting vinyl records, and
              traveling with friends
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
