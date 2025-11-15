import React, { useEffect } from 'react'
import './Presentation.css'
import team from ".//../assets/img/team.webp"

export default function Presentation() {
  useEffect(() => {
    const elements = document.querySelectorAll('.presentation-img')
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
      { threshold: 0.8 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="presentation">
      <div className="section-bg-black">
        <div className="section">
          <h2>Notre ADN</h2>
          <div className="container">
            <div className="presentation-card">
              <div className="presentation-text">

                <p>
                  <span className="bold">Fabien Durand</span>, fondateur, met à profit plus de <span className="bold">10 ans d’expérience au sein d’une Unité Parachutiste Spécialisée de l’Armée de Terre,</span> complétée par des <span className="bold">formations reconnues dans le monde de l’entreprise.</span> Cette double expérience, militaire et civile, est aujourd’hui au service des organisations souhaitant renforcer leur culture sécurité.
                </p>

                <p>
                  Entouré de <span className="bold">partenaires experts,</span> nous proposons des <span className="bold">formations et accompagnements personnalisés,</span> directement dans votre environnement.
                </p>

                <p>
                  Notre spécialité : <span className="bold">Accompagner</span> les entreprises dans la prévention des risques professionnels, dans la Sécurité au Travail et dans la Sûreté, en alliant expertise terrain et approche humaine.
                </p>

                <p>
                  Notre mission : <span className="bold">sensibiliser, prévenir et améliorer les conditions de vie au travail</span> - pour des équipes plus sûres, plus sereines et plus performantes.
                </p>

              </div>

              <div className="presentation-img">
                <img src={team} loading="lazy" alt="Equipe de formation" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}