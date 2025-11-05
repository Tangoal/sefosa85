import React from 'react'
import './Contact.css'
//import avatar from ".//../assets/img/avatar.png"
//import location from ".//../assets/img/localisation.png"
//import phone from ".//../assets/img/appel.png"
//import mail from ".//../assets/img/mail.png"
import avatar from ".//../assets/img/avatar_inversed.png"
import location from ".//../assets/img/localisation_inversed.png"
import phone from ".//../assets/img/appel_inversed.png"
import mail from ".//../assets/img/mail_inversed.png"
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact">
      <div class="section-bg-black">
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
                <p><a href="mailto:contact@sefosa85.fr">contact@sefosa85.fr</a></p>
              </div>
            </div>
            {/* <ContactForm /> */}
          </div>
        </div>
      </div>
    </section>
  )
}