import React from "react"
import { GithubIcon, DribbbleIcon, LinkedInIcon } from "../components/Icons"
import Button from "../components/button"

const Contact = props => {
  return (
    <div className={`bg-secondary justify-center flex min-h-screen`}>
      <div className="w-full sm:w-10/12 md:w-9/12 px-5 sm:px-0 mx-auto sm:flex h-full relative flex-col justify-center">
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 py-16">
            <p className="text-base text-main-color before-line mb-4 opacity">
              +2348068212202
            </p>
            <p className="text-base text-main-color before-line mb-4 opacity">
              tobylonge@gmail.com
            </p>
            <p className="text-base text-main-color before-line mb-4 opacity">
              Lagos, Nigeria
            </p>
            <div className="mt-8 flex mb-16">
              <div>
                <a href="https://github.com/tobylonge" target="_blank">
                  <GithubIcon height={24} width={24} color={props.themeColor} />
                </a>
              </div>
              <div className="mx-4">
                <a href="https://dribbble.com/tobylonge" target="_blank">
                  <DribbbleIcon
                    height={24}
                    width={24}
                    color={props.themeColor}
                  />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/alonge-oluwatobi/"
                  target="_blank"
                >
                  <LinkedInIcon
                    height={24}
                    width={24}
                    color={props.themeColor}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="sm:w-2/3">
            <div
              className="rounded overflow-hidden -mt-16 p-3 bg-secondary p-3 sm:p-8 mb-8"
              style={{ boxShadow: "0 0px 15px 0px rgba(0, 0, 0, 0.50)" }}
              id="contact"
            >
              <form className="justify-center flex">
                <div className="mb-4 lg:w-2/3 w-auto">
                  <div className="group -ionic">
                    <input
                      className=" shadow border rounded field bg-secondary border-main-text text-main-text"
                      type="text"
                      required
                    />

                    <label className="title text-main-text">Your Name</label>
                  </div>

                  <div className="group -ionic">
                    <input
                      className=" shadow border rounded field bg-secondary border-main-text text-main-text"
                      type="email"
                      required
                    />

                    <label className="title text-main-text">
                      Your Email Address
                    </label>
                  </div>

                  <div className="group -ionic">
                    <textarea
                      className=" shadow border rounded field bg-secondary border-main-text text-main-text"
                      cols="15"
                      rows="7"
                      required
                    ></textarea>

                    <label className="title text-main-text">Your Message</label>
                  </div>
                  <div className="flex justify-end -mr-4 mt-10">
                    <Button type={"primary"}>Send Message</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
