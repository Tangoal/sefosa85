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
      <div class="section-bg-white">
        <div class="section-contact">
          <h2>Contact</h2>
          <div class="container-contact">
            <div class="info-contact">
              <div class="icon-text">
                <img src={avatar} loading="lazy" alt="Fondateur" />
                <p>Fabien DURAND</p>
              </div>
              <div class="icon-text">
                <img src={location} loading="lazy" alt="Localisation" />
                <p>Vendée et départements limitrophes</p>
              </div>
              <div class="icon-text">
                <img src={phone} loading="lazy" alt="Téléphone" />
                <p>06 72 12 84 40</p>
              </div>
              <div class="icon-text">
                <img src={mail} loading="lazy" alt="Mail" />
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