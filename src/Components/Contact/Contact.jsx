import React from 'react'
import './Contact.css'

const Contact = () => {

  const [result, setResult] = React.useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")

    const formData = new FormData(event.target)

    formData.append(
      "access_key",
      "b4c5d97d-3152-4a03-b60d-61b6f42ad0ce"
    )

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <div>

      {/* Section 1: Header */}
      <section className="touch-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <div className="bg-text">CONTACT</div>

              <h1
                className="main-connect fw-bold position-relative"
                style={{ zIndex: 1 }}
              >
                <span className="text-white">GET IN</span>{' '}
                <span className="text-warn">TOUCH</span>
              </h1>

            </div>
          </div>
        </div>
      </section>


      {/* Section 2: Contact Details */}
      <section className="cont-details">
        <div className="container">
          <div className="row">

            {/* Left Info Section */}
            <div className="col-lg-5 mb-4">

              <h3 className="fw-bold">DON'T BE SHY !</h3>

              <p className="text-light">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas
                or opportunities to be part of your visions.
              </p>


              {/* Mail */}
              <div className="d-flex align-items-center mb-3">

                <div className="bg-warnings text-dark p-3 rounded me-3 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div className="info-data">
                  <small className="d-block text-light">
                    MAIL ME
                  </small>

                  <a href="mailto:vik12kumar12@gmail.com">
                    <span className="fw-bold">
                      vik12kumar12@gmail.com
                    </span>
                  </a>
                </div>

              </div>


              {/* Phone */}
              <div className="d-flex align-items-center mb-4">

                <div className="bg-warnings text-dark p-3 rounded me-3 d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-phone"></i>
                </div>

                <div className="info-data">
                  <small className="d-block text-light">
                    CALL ME
                  </small>

                  <a href="tel:9058656557">
                    <span className="fw-bold">
                      9058656557
                    </span>
                  </a>
                </div>

              </div>


              {/* Social Icons */}
              <div className="social-connect d-flex gap-3">

                <a
                  href="https://www.facebook.com/share/1BxB48YXkH/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-4"
                >
                  <i className="fab fa-facebook"></i>
                </a>

                <a
                  href="https://youtube.com/@vikrantkumar7976"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-4"
                >
                  <i className="fab fa-youtube"></i>
                </a>

                <a
                  href="https://www.instagram.com/vikrant_singh_1_4_3"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-4"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/vikrant-kumar-585a57181/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white fs-4"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

              </div>

            </div>


            {/* Right Form Section */}
            <div className="col-lg-7 form-send">

              <form onSubmit={onSubmit}>

                <div className="row g-3">

                  {/* Name */}
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-dark text-white border-secondary rounded-pill"
                      placeholder="YOUR NAME"
                      required
                    />
                  </div>


                  {/* Email */}
                  <div className="col-md-4">
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-dark text-white border-secondary rounded-pill"
                      placeholder="YOUR EMAIL"
                      required
                    />
                  </div>


                  {/* Subject */}
                  <div className="col-md-4">
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-dark text-white border-secondary rounded-pill"
                      placeholder="YOUR SUBJECT"
                      required
                    />
                  </div>


                  {/* Message */}
                  <div className="col-12">
                    <textarea
                      rows="6"
                      name="message"
                      className="form-control bg-dark text-white border-secondary rounded-4"
                      placeholder="YOUR MESSAGE"
                      required
                    ></textarea>
                  </div>


                  {/* Submit Button */}
                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn send-btn"
                    >
                      SEND MESSAGE

                      <span className="bg-warnig">
                        <i className="fa-solid fa-paper-plane"></i>
                      </span>

                    </button>

                  </div>

                </div>

              </form>


              {/* Form Status */}
              <span className="sending">
                {result}
              </span>

            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
