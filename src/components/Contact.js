import React from 'react'
import './Contact.css'
import avatar from ".//../assets/img/avatar5.png"
import location from ".//../assets/img/broche-de-localisation (2).png"
import phone from ".//../assets/img/appel.png"
import mail from ".//../assets/img/mail.png"
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact">
      <div class="contact-bg">
        <div class="contact-section">
          <h2>Contact</h2>
          <div class="contact-container">
            <div class="contact-info">
              <div class="icon-text">
                <img src={avatar} alt="Fondateur" />
                <p>Fabien DURAND</p>
              </div>
              <div class="icon-text">
                <img src={location} alt="Localisation" />
                <p>Vendée et départements limitrophes</p>
              </div>
              <div class="icon-text">
                <img src={phone} alt="Téléphone" />
                <p>06 72 12 84 40</p>
              </div>
              <div class="icon-text">
                <img src={mail} alt="Mail" />
                <p>contact@sefosa85.fr</p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}