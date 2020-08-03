import React, { Fragment, useState, useEffect } from "react"
import { SuccessIcon, FailureIcon } from "../components/Icons"
import Button from "../components/button"

export default function Modal(props) {
  const [timeLeft, setTimeLeft] = useState(30)

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) {
      props.closeModal()
      clearInterval(intervalId)
      return
    }

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])

  return (
    <div
      className={`modal ${
        props.modal.open ? "" : "opacity-0 pointer-events-none"
      } fixed w-full h-full top-0 left-0 flex items-center justify-center z-20`}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-75"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div
          className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          onClick={props.closeModal}
        >
          <svg
            className="fill-current text-white"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          <span className="text-sm">(Esc)</span>
        </div>

        <div className="modal-content py-4 text-left px-6">
          <div className="flex justify-end items-center opacity-50">
            <div
              className="modal-close cursor-pointer z-50"
              onClick={props.closeModal}
            >
              <svg
                className="fill-current text-black"
                width="22"
                height="22"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center text-center">
            {props.modal.type === 1 ? (
              <Fragment>
                <SuccessIcon height={150} width={150} />
                <p className="text-base leading-snug">
                  Thank you for getting in touch. I will get back in touch with
                  you soon. Have a great day 😊
                </p>
                <div className="pt-8">
                  <Button type={"primary"} onClick={props.closeModal}>
                    Close this window
                  </Button>

                  <p className="text-sm -mt-2 mb-4 text-main-text">
                    Window will close automatically in {timeLeft}s
                  </p>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <FailureIcon height={150} width={150} />
                <p className="text-base leading-snug">
                  Something went wrong... Please try again or send an email to{" "}
                  <a
                    href="mailto:tobylonge@gmail.com"
                    className="font-medium underline"
                  >
                    tobylonge@gmail.com
                  </a>
                </p>
                <div className="pt-8">
                  <Button type={"primary"} onClick={props.submitContact}>
                    Try again
                  </Button>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
