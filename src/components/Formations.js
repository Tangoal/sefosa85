import React, { useEffect } from 'react'
import './Formations.css'
import formation1 from './../assets/img/formation1.webp'
import formation2 from './../assets/img/formation2.webp'
import formation3 from './../assets/img/formation3.webp'

export default function Formations() {
  useEffect(() => {
    const elements = document.querySelectorAll('.formation-img-container')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        })
      },
      { threshold: 0.5 } // L'animation se déclenche quand 50% de l'élément est visible
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect() // Nettoyage à la destruction du composant
  }, [])

  return (
    <section id="formations">
      <div className="section-bg-white">
        <div className="section">
          <h2>Formations</h2>
          <div className="container">
            <div className="formation-item"> {/* Cette div semble superflue, mais je la garde pour ne pas casser le style existant */}
              <div className="formation-img-container left">
                <img src={formation1} alt="Formation Secourisme" className="formation-img" />
                <div className="formation-card right">
                  <h3>SECOURISME</h3>
                  <p>Savoir agir face à une situation d’accident de travail. Nos formations en secourisme permettent à chaque participant d’acquérir rapidement les bons réflexes pour intervenir efficacement.</p>
                  <p className="formation-details">SST, PSC, GQS, PSE 1&2, Stop The Bleed ®, TECC</p>
                </div>
              </div>
              <div className="formation-img-container right">
                <img src={formation2} alt="Formation Incendie" className="formation-img" />
                <div className="formation-card left">
                  <h3>INCENDIE</h3>
                  <p>Prévenir et réagir face à un incendie est essentiel. Nos formations combinent théorie et exercices pratiques pour préparer chaque équipe à agir avec calme et efficacité.</p>
                  <p className="formation-details">Equipier de Première Intervention, Evacuation</p>
                </div>
              </div>
              <div className="formation-img-container left last">
                <img src={formation3} alt="Formation PPMS" className="formation-img" />
                <div className="formation-card right">
                  <h3>ACCOMPAGNEMENT PPMS</h3>
                  <p>Chaque établissement doit être prêt à faire face à une situation d’urgence. Nous accompagnons les entreprises dans la mise en place de leur Plan Particulier de Mise en Sûreté (PPMS), pour une organisation claire, réactive et adaptée à chaque environnement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}