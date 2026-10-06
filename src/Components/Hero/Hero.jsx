import React from 'react'
import './Hero.css'
import Vikrant_img from '../../assets/vikrant.jpg'

const Hero = () => {
  return (
        <div id="home" className='hero-section container'>
        <div className='row align-items-center'>
           
            <div className='col-lg-5 text-center mb-5 mb-lg-0'>
                <div className="profile-img-container">
                    <div className="profile-img-wrapper">
                        <img src={Vikrant_img} alt="Vikrant Kumar" className="profile-img"/>
                        <div className="profile-glow"></div>
                    </div>
                </div>
            </div>

            <div className="col-lg-7">
                <div className="content">
                    <div className="intro-text">Welcome to My Portfolio</div>
                    <h1>— I'M <span>Vikrant Kumar.</span></h1>
                    <h2>WEB DESIGNER / DEVELOPER</h2>
                   <p>I'm a <span>Front-End Developer & Web Designer</span> with 2+ years of experience and <span>20+ websites</span> delivered. I specialize in <span>HTML, CSS, JavaScript, and jQuery</span>, and build on <span>Shopify, Webflow, WordPress, Wix, Elementor, and Go High Level</span>.</p>
                   <p>I'm currently <span>expanding my skills in React.js</span> for component-based development.</p>
                    <a href="" className="btn-custom">DISCOVER MY WORK <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Hero