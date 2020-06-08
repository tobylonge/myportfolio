import React, { useState } from "react"
import ProgressBar from "../components/progressBar"

const Skills = () => {
  const [skills] = useState([
    { title: "UI/UX DESIGN (BLASMIQ, SKETCH, MARVEL)", percentage: "90%" },
    { title: "HTML", percentage: "98%" },
    { title: "CSS (SCSS, Bootstrap, Tailwindcss)", percentage: "98%" },
    { title: "JAVASCRIPT (ES6, REACT JS GATSBY JS)", percentage: "80%" },
    { title: "STATE MANAGEMENT (CONTEXT API)", percentage: "80%" },
    { title: "TESTING (JEST, REACT TESTING LIBARY)", percentage: "60%" },
  ])
  return (
    <div className="flex my-20">
      <div className="relative">
        <h4 className="uppercase text-base text-main-color before-line rotate">
          <span>My Skills</span>
        </h4>
        <div className="w-full">
          <div class="w-full flex flex-wrap ml-4">
            {skills.map(skill => (
              <ProgressBar title={skill.title} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
