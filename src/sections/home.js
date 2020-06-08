import React from "react"
import {
  GithubIcon,
  BehanceIcon,
  LinkedInIcon,
} from "../components/socialMediaIcons"
import Button from "../components/button"
import Image from "../components/image"
const Home = props => {
  return (
    <div
      className={`bg-primary flex flex-col justify-center flex`}
      style={{ height: "calc(100% - 1.875rem)" }}
    >
      <div className="w-full lg:w-9/12 mx-auto sm:flex h-full relative">
        <div className="sm:w-1/2 self-center">
          <h4 className="uppercase text-sm text-main-color before-line mb-3">
            Hello
          </h4>
          <h1 className="text-secondary-text text-5xl font-bold">
            I'm <span className="text-main-color">Oluwatobi</span> Alonge
          </h1>
          <p className="text-main-text font-medium">
            Front-End Developer
            <span className="text-main-color mx-2">|</span> UI/UX Designer
          </p>
          <div className="mt-5 flex mb-16">
            <div>
              <GithubIcon height={24} width={24} color={props.themeColor} />
            </div>
            <div className="mx-3">
              <BehanceIcon height={24} width={24} color={props.themeColor} />
            </div>
            <div>
              <LinkedInIcon height={24} width={24} color={props.themeColor} />
            </div>
          </div>
          <Button type={"primary"}>Contact Me</Button>
        </div>
        <div className="w-full sm:w-1/2 px-10 pt-10 sm:flex sm:flex-col absolute p-0 bottom-0 right-0">
          <Image />
        </div>
      </div>

      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
    </div>
  )
}

export default Home
