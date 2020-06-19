import React from "react"
import Button from "../components/button"
import Skills from "./skills"
const about = () => {
  return (
    <div className={`bg-secondary justify-center flex min-h-screen `}>
      <div className="w-full lg:w-9/12 mx-auto sm:flex h-full relative flex-col justify-center">
        <div className="mt-20">
          <h4 className="uppercase text-base text-main-color before-line mb-3">
            About Me
          </h4>
          <p className="text-main-text leading-7 mb-6">
            Oluwatobi Alonge is a self-taught UI/UX Designer and Front-End
            Developer working in Lagos, Nigeria. He is passionate about creating
            intuitive, engaging and clean designs as well as strong skills and
            ability in writing clean and efficient code
          </p>
          <div className="text-main-text leading-7 mb-6">
            Identified strengths include:
            <ul className="list-inside list-disc">
              <li>
                Able to work as a team or independently towards identified goals
              </li>
              <li>Humility and</li>
              <li>
                Open to feedback which I believe drives progress in a team.
              </li>
            </ul>
          </div>
          <Button type={"primary"}>Contact Me</Button>
          <Button type={"outline"}>Download CV</Button>
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default about
