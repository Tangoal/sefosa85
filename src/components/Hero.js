import React from 'react'
import './Hero.css'
import logo from ".//../assets/img/LOGO_SEFOSA_RVB.jpg"

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div class="logo">
          <img src={logo} alt="SEFOSA" />
        </div>
        <div class="intro">
          <h1>Formation pour les professionnels et les particuliers</h1>
          <p>Ne restons pas démunis face aux accidents de la vie !</p>
        </div>
      </div>
    </section>
  )
}