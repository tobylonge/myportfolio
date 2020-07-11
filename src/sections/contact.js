import React, { useState, useRef, Fragment } from "react"
import axios from "axios"
import { host_url } from "./../../app-config"
import {
  GithubIcon,
  DribbbleIcon,
  LinkedInIcon,
  LoaderIcon,
} from "../components/Icons"
import Button from "../components/button"
import Modal from "../components/modal"

const Contact = props => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [error, setError] = useState({
    nameError: false,
    emailError: false,
  })
  const [modal, setModal] = useState({ open: false, type: 1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const handleChange = e => {
    const value = e.target.value
    // if (value) {
    setError({ nameError: false, emailError: false })
    setUser({
      ...user,
      [e.target.name]: value,
    })
    // }
  }

  const openModal = type => {
    if (type === 1) {
      setModal({ open: true, type: 1 })
    } else if (type === 2) {
      setModal({ open: true, type: 2 })
    }
  }

  const closeModal = () => {
    setModal({ ...modal, open: false })
  }

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  const checkValidations = () => {
    let isValid = true
    if (!user.name) {
      setError({
        ...error,
        nameError: true,
      })
      nameRef.current.focus()
      isValid = false
      return isValid
    } else if (!user.email || !validateEmail(user.email)) {
      setError({
        ...error,
        emailError: true,
      })
      emailRef.current.focus()
      isValid = false
      return isValid
    }
    return isValid
  }

  const submitContact = e => {
    e.preventDefault()
    console.log("user ", user)
    const isVaild = checkValidations()
    if (!isVaild) {
      return
    }
    setIsSubmitting(true)
    console.log("Submiting Form")
    axios
      .post(`${host_url}sendMail`, user)
      .then(response => {
        console.log("response ", response)
        if (response.status === 200) {
          openModal(1)
          setIsSubmitting(false)
          resetForm()
        } else {
          props.openModal(2)
          setIsSubmitting(false)
        }
      })
      .catch(error => {
        openModal(2)
        setIsSubmitting(false)
      })
  }

  const resetForm = () => {
    setUser({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <Fragment>
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
                    <GithubIcon
                      height={24}
                      width={24}
                      color={props.themeColor}
                    />
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
                    <div className="mb-8">
                      <div className="group -ionic">
                        <input
                          className={`shadow border rounded field bg-secondary ${
                            error.nameError
                              ? "border-red-400"
                              : "border-main-text"
                          } text-main-text ${user.name ? "notEmpty" : ""}`}
                          type="text"
                          value={user.name}
                          name="name"
                          onChange={handleChange}
                          ref={nameRef}
                          id="name"
                        />

                        <label
                          className={`title ${
                            error.nameError ? "text-red-400" : "text-main-text"
                          }`}
                          htmlFor="name"
                        >
                          Your Name
                        </label>
                      </div>
                      <p className="text-xs text-red-400 mt-1">
                        {error.nameError ? "Please enter your name" : ""}
                      </p>
                    </div>

                    <div className="mb-8">
                      <div className="group -ionic">
                        <input
                          className={`shadow border rounded field bg-secondary ${
                            error.emailError
                              ? "border-red-400"
                              : "border-main-text"
                          } text-main-text ${user.email ? "notEmpty" : ""}`}
                          type="text"
                          name="email"
                          value={user.email}
                          onChange={handleChange}
                          ref={emailRef}
                          id="email"
                        />

                        <label
                          className={`title ${
                            error.emailError ? "text-red-400" : "text-main-text"
                          }`}
                          htmlFor="email"
                        >
                          Your Email Address
                        </label>
                      </div>
                      <p className="text-xs text-red-400 mt-1">
                        {error.emailError
                          ? "Please enter your email in format: youremail@xample.com"
                          : ""}
                      </p>
                    </div>

                    <div className="group -ionic">
                      <textarea
                        className=" shadow border rounded field bg-secondary border-main-text text-main-text"
                        type="message"
                        cols="15"
                        rows="7"
                        required
                        name="message"
                        value={user.message}
                        onChange={handleChange}
                        id="message"
                      ></textarea>

                      <label className="title text-main-text" htmlFor="message">
                        Your Message
                      </label>
                    </div>
                    <div className="flex justify-end -mr-4 mt-10">
                      <Button type="primary" onClick={submitContact}>
                        {isSubmitting ? (
                          <LoaderIcon height={24} width={24} />
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        modal={modal}
        submitContact={submitContact}
      />
    </Fragment>
  )
}

export default Contact
