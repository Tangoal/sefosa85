import './Valeurs.css'
import React from 'react'
//import sensibiliser from ".//../assets/img/megaphone.png"
//import former from ".//../assets/img/teaching.png"
//import sauver from ".//../assets/img/se-soucier.png"
import sensibiliser from ".//../assets/img/megaphone_inversed.png"
import former from ".//../assets/img/teaching_inversed.png"
import sauver from ".//../assets/img/se-soucier_inversed.png"

export default function Valeurs() {
  return (
    <section id="valeurs">
      <div className="section-bg-white">
        <div className="section">
          <div className="container-valeurs">
            <div className="valeur">
              <div className="icone-valeur">
                <img src={sensibiliser} loading="lazy" alt="Sensibiliser" />
              </div>
              <h3>SEnsibiliser</h3>
              <p>
                Identifier et comprendre les risques. En entreprise ou au quotidien, cette prise de conscience constitue la première étape pour garantir votre sécurité.
              </p>
            </div>
            <div className="valeur">
              <div className="icone-valeur">
                <img src={former} loading="lazy" alt="Former" />
              </div>
              <h3>FOrmer</h3>
              <p>
                Des formations pratiques et accessibles à tous, conçues pour acquérir rapidement les bons réflexes et savoir les appliquer efficacement.
              </p>
            </div>
            <div className="valeur">
              <div className="icone-valeur">
                <img src={sauver} loading="lazy" alt="Sauver" />
              </div>
              <h3>SAuver</h3>
              <p>
                Réagir rapidement et en toute sécurité est essentiel pour protéger les personnes et limiter les dommages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}