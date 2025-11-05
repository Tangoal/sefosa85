import React from 'react'
import './Presentation.css'
import profile_pic from ".//../assets/img/fabien_durand.webp"

export default function Presentation() {
  return (
    <section id="presentation">
      <div class="section-bg-black">
        <div class="section">
          <h2>Team</h2>
          <div class="container">
            <div class="presentation-text">
              {/* <p>M’appuyant sur une expérience de 10 années au sein d’une unité Parachutiste Spécialisée de l’Armée de Terre, j’ai eu l’opportunité de découvrir et de m’impliquer pleinement dans le Secourisme.</p>
              <p>Diplômé d’un brevet en pédagogie, formateur SST, GQS, PSC1, PSE, agrémenté formateur Stop The Bleed® et formateur Secourisme au Combat, j'ai pu mettre en œuvre ces compétences aussi bien en métropole qu'en milieux isolés à l'étranger.</p>
              <p>En créant SEFOSA, mon souhait est de permettre à chacun de se SEnsibiliser, avant même de se FOrmer, pour savoir comment SAuver un parent, un enfant, un ami, un collègue…</p>*/}
              <p>Nos intervenants sont des spécialistes de la sécurité, de la sûreté et de la prévention en santé et sécurité au travail, forts d’une expérience reconnue en France et à l’international.</p>
              <p>Ils conçoivent et mettent en œuvre des programmes de formation et d’accompagnement adaptés à chaque environnement et à chaque enjeu.</p>
              <p>Leur expertise se traduit par des solutions pragmatiques, efficaces et personnalisées, pour répondre concrètement aux besoins de votre organisation.</p>
            </div>
            {/*<div class="presentation-img"><img src={profile_pic} loading="lazy" alt="Fabien Durand" /></div>*/}

          </div>
        </div>
      </div>
    </section>
  )
}