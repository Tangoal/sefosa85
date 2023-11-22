import React from 'react'
import './Presentation.css'
import profile_pic from ".//../assets/img/FD.jpg"

export default function Presentation() {
  return (
    <section id="presentation">
      <div class="presentation-bg">
        <div class="section">
          <h2>Team</h2>
          <div class="presentation-container">
            <div class="presentation-text">
              <p>M’appuyant sur une expérience de 10 années au sein d’une unité Parachutiste Spécialisée de l’Armée de Terre, j’ai eu l’opportunité de découvrir et de m’impliquer pleinement dans le Secourisme.</p>
              <p>Diplômé d’un brevet en pédagogie, formateur SST, GQS, PSC1, PSE, agrémenté formateur Stop The Bleed® et formateur Secourisme au Combat, j'ai pu mettre en œuvre ces compétences aussi bien en métropole qu'en milieux isolés à l'étranger.</p>
              <p>En créant SEFOSA, mon souhait est de permettre à chacun de se SEnsibiliser, avant même de se FOrmer, pour savoir comment SAuver un parent, un enfant, un ami, un collègue…</p>
            </div>
            <img src={profile_pic} alt="Fabien Durand" />

          </div>
        </div>
      </div>
    </section>
  )
}