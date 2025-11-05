import React from 'react'
import './Hero.css'
//import logo from ".//../assets/img/logo_sefosa.webp"
import logo from ".//../assets/img/logo_sefosa_inverted.png"

export default function Hero() {
  return (
    <section id="hero">
      <div className="section-bg-black">
        <div className="hero-section">
          <div className="hero-content">
            <div className="logo">
              <img fetchpriority="high" src={logo} alt="SEFOSA" />
            </div>
            {/*<div class="intro">
              <p>Sensibiliser</p>
              <p>Former</p>
              <p>Sauver</p>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  )
}