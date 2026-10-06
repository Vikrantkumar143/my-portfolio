import React from 'react'
import './Portfolio.css'
import Gonish_img from '../../assets/gonish.png'
import Alliance_img from '../../assets/akpalliance.png'
import Circle_img from '../../assets/circleoak.png'
import Emma_img from '../../assets/dremma.png'
import Elizabeth_img from '../../assets/elizabeth.png'
import Essense_img from '../../assets/essence.png'
import FirstStep_img from '../../assets/firststep.png'
import Arberon_img from '../../assets/arberon.png'
import Jash_img from '../../assets/jash.png'
import Nexus_img from '../../assets/nexus.png'
import Osama_img from '../../assets/osama.png'
import Playhaus_img from '../../assets/playhaus.png'
import Realstate_img from '../../assets/realstate.png'
import Superexercise_img from '../../assets/superexercise.png'
import Safe_img from '../../assets/safesender.png'
import Supply_img from '../../assets/supplychain.png'
import Orton_img from '../../assets/tjorton.png'
import Truemission_img from '../../assets/truemissonhr.png'
import Realai_img from '../../assets/ai_automation_project.png'
import Strength_img from '../../assets/strengthnlove.jpg'
import Money_img from '../../assets/money_project.jpg'




const Portfolio = () => {
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

              <div className="bg-text">works</div>

              <h1
                className="main-connect fw-bold position-relative"
                style={{ zIndex: 1 }}
              >
                <span className="text-white">MY</span>{' '}
                <span className="text-warn">PORTFOLIO</span>
              </h1>

            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section">
        <div className="container">

          <div className="row g-4">

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://gonishmarket.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Gonish_img} alt="Gonish Market" />
                  <div className="portfolio-overlay from-left">Gonish Market</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://akpalliance.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Alliance_img} alt="AKP Alliance" />
                  <div className="portfolio-overlay from-top">AKP Alliance</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.circleoakrehabilitation.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Circle_img} alt="Circle Oak Rehabilitation" />
                  <div className="portfolio-overlay from-right">Rehabilitation Wix</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://dremmakim.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Emma_img} alt="Dr. Emma Kim" />
                  <div className="portfolio-overlay from-bottom">Dr. Emma Kim</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.mcelitemanagement.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Elizabeth_img} alt="Elizabeth" />
                  <div className="portfolio-overlay from-left">Elizabeth Wix</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://esense.ai/" target="_blank" rel="noopener noreferrer">
                  <img src={Essense_img} alt="Essense AI" />
                  <div className="portfolio-overlay from-top">Essense AI</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://firststepsds.com/" target="_blank" rel="noopener noreferrer">
                  <img src={FirstStep_img} alt="First Step" />
                  <div className="portfolio-overlay from-bottom">Firststep Elementor</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://arberoncontracting.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Arberon_img} alt="Arberon Contracting" />
                  <div className="portfolio-overlay from-left">Arberon Contracting</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.jashllc.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Jash_img} alt="Jash Enterprise" />
                  <div className="portfolio-overlay from-right">Jash Enterprise Wix</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://nexuscgi.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Nexus_img} alt="Nexus CGI" />
                  <div className="portfolio-overlay from-top">Nexus CGI</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://osamaelfar.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Osama_img} alt="Osama Elfar" />
                  <div className="portfolio-overlay from-bottom">Osama Elfar</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://playhaus.uk/" target="_blank" rel="noopener noreferrer">
                  <img src={Playhaus_img} alt="Playhaus UK" />
                  <div className="portfolio-overlay from-top">Playhaus UK</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://realestateventures.us/" target="_blank" rel="noopener noreferrer">
                  <img src={Realstate_img} alt="Real Estate Ventures" />
                  <div className="portfolio-overlay from-right">Real Estate Ventures</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://superexerciseband.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Superexercise_img} alt="Super Exercise" />
                  <div className="portfolio-overlay from-left">SuperExercise Shopify</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://safesender.ai/" target="_blank" rel="noopener noreferrer">
                  <img src={Safe_img} alt="Safe Sender" />
                  <div className="portfolio-overlay from-bottom">Safe Sender</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.supplychainexperts.ai/" target="_blank" rel="noopener noreferrer">
                  <img src={Supply_img} alt="Supply Chain Experts" />
                  <div className="portfolio-overlay from-right">Supplychain GoHighLevel</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://aboundtransportgroup.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Orton_img} alt="TJ Orton" />
                  <div className="portfolio-overlay from-left">TJ Orton Elementor</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://truemissionhr.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Truemission_img} alt="TrueMission HR" />
                  <div className="portfolio-overlay from-top">TrueMission HR</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://realaiautomation.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Realai_img} alt="Real AI Automation" />
                  <div className="portfolio-overlay from-right">Real AI Automation</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://strengthnlove.org/" target="_blank" rel="noopener noreferrer">
                  <img src={Strength_img} alt="Strength N Love" />
                  <div className="portfolio-overlay from-left">Strength N Love</div>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="portfolio-item">
                <a href="https://www.moneyactiontoday.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Money_img} alt="Money Action Today" />
                  <div className="portfolio-overlay from-top">MoneyActionToday</div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Portfolio