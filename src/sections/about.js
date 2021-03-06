import React from "react"
import Button from "../components/button"
import Skills from "./skills"
const about = props => {
  const openCV = () => {
    window.open(
      "https://drive.google.com/file/d/1SP8D-ot6ZoM5fc-lWsj22pIJZZu_Hmk_/view?usp=sharing",
      "_blank"
    )
  }

  return (
    <div
      className={`bg-secondary justify-center flex min-h-screen `}
      id="about"
    >
      <div className="w-full sm:w-10/12 md:w-9/12 mx-auto sm:flex h-full relative flex-col justify-center px-5 sm:px-0">
        <div className="mt-20">
          <h4 className="uppercase text-base text-main-color before-line mb-3">
            About Me
          </h4>
          <p className="text-main-text leading-7 mb-6">
            I am a self-taught UI/UX Designer and Front-End Developer working in
            Lagos, Nigeria. I am passionate about creating intuitive, engaging
            and clean designs as well as strong skills and ability in writing
            clean and efficient code
          </p>
          <div className="text-main-text leading-7 mb-6">
            My identified strengths include:
            <ul className="list-inside list-disc">
              <li>
                Able to work as a team or independently towards identified goals
              </li>
              <li>Creative and critical thinking</li>
              <li>
                Open to feedback which I believe drives progress in a team.
              </li>
            </ul>
          </div>
          <Button type={"primary"} onClick={props.scrollToRef}>
            Contact Me
          </Button>
          <Button type={"outline"} onClick={openCV}>
            Download CV
          </Button>
          <Skills />
        </div>
      </div>
    </div>
  )
}

export default about
