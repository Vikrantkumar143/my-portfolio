import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
       
    <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
    </div>
    
    
    <div className="grid-overlay"></div>
    
   
    <div className="decorative-dots"></div>


      <section className="touch-sec">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
<div className="bg-text">RESUME</div>
    <h1 className="main-connect fw-bold position-relative" style={{ zIndex: 1 }}>
      <span className="text-white">ABOUT</span> <span className="text-warn">ME</span>
    </h1>
            </div>
        </div>
    </div>
    
  </section>

    <section className="about-me-section">
        <div className="container">

            <div className="row gy-5">
               
                <div className="col-lg-7">
                    <div className="personal-info-card">
                        <h4 className="fw-bold mb-4 text-white section-heading">PERSONAL INFOS</h4>
                        <div className="row gy-3">
                            <div className="col-sm-5">
                                <div className="info-item">
                                    <i className="bi bi-person-circle"></i>
                                    <p className="details mb-0"><strong>First Name:</strong> Vikrant</p>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-person-badge"></i>
                                    <p className="details mb-0"><strong>Last Name:</strong> Kumar</p>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-calendar-event"></i>
                                    <p className="details mb-0"><strong>Age:</strong> 27 Years</p>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-globe"></i>
                                    <p className="details mb-0"><strong>Nationality:</strong> Indian</p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="info-item">
                                    <i className="bi bi-telephone"></i>
                                    <p className="details mb-0"><a></a><strong>Phone:</strong> +91 8755957843</p>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-envelope"></i>
                                    <p className="details mb-0"><strong>Email:</strong> kvikrant543@gmail.com</p>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-microsoft-teams"></i>
                                    <p className="details mb-0"><strong>Teams:</strong> Vikrant Kumar</p>
                                </div>
                                <div className="info-item">
                                    <i className="bi bi-translate"></i>
                                    <p className="details mb-0"><strong>Languages:</strong> English, Hindi</p>
                                </div>
                            </div>
                        </div>

                     
                        <div className="mt-2 pt-2 reume-btn">
                            <a href="VIKRANT_KUMAR_RESUME.pdf" target="_blank" className="btn btn-download btn-lg d-inline-flex align-items-center px-4">
                                <span className="me-2">Download CV</span>
                                <i className="bi bi-download fs-5"></i>
                            </a>
                        </div>
                    </div>
                </div>

              
                <div className="col-lg-5">
                    <div className="stats-container">
                        <div className="stats-grid">
                            <div className="stats-card text-center p-4">
                                <h3 className="fw-bold">3</h3>
                                <p className="text-light mb-0">Years of Experience</p>
                            </div>
                            <div className="stats-card text-center p-4">
                                <h3 className="fw-bold">20+</h3>
                                <p className="text-light mb-0">Completed Projects</p>
                            </div>
                            <div className="stats-card text-center p-4">
                                <h3 className="fw-bold">20+</h3>
                                <p className="text-light mb-0">Happy Customers</p>
                            </div>
                            <div className="stats-card text-center p-4">
                                <h3 className="fw-bold">5+</h3>
                                <p className="text-light mb-0">Awards Won</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About