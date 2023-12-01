import './Valeurs.css'
import React from 'react'
import sensibiliser from ".//../assets/img/megaphone.png"
import former from ".//../assets/img/teaching.png"
import sauver from ".//../assets/img/se-soucier.png"

export default function Valeurs() {
  return (
    <section id="valeurs">
      <div className="section-bg-black">
        <div className="section">
            <div className="container-valeurs">
            <div className="valeur">
              <div className="icone-valeur">
                <img src={sensibiliser} alt="Sensibiliser" />
              </div>
              <h3>SEnsibiliser</h3>
              <p>
                Avoir une approche consciente des risques présents autour de nous
                permet de mettre en place, dans notre quotidien, la meilleure
                PREVENTION possible.
              </p>
            </div>
            <div className="valeur">
              <div className="icone-valeur">
                <img src={former} alt="Former" />
              </div>
              <h3>FOrmer</h3>
              <p>
                Quel que soit le contexte{" "}
                <i>(en entreprise, à la maison ou en milieu dégradé)</i>, la
                formation aux gestes de premier secours est ACCESSIBLE et adaptable
                à tous. Cette dernière est applicable aussi bien au quotidien qu'en
                situation d'urgence.
              </p>
            </div>
            <div className="valeur">
              <div className="icone-valeur">
                <img src={sauver} alt="Sauver" />
              </div>
              <h3>SAuver</h3>
              <p>
                REAGIR en tant que primo intervenant c'est assurer sa protection et
                celle des autres. Une réponse rapide et efficace est essentielle
                pour augmenter les chances de survie de notre victime, dans
                l’attente des secours médicalisés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}