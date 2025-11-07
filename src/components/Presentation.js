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
      { threshold: 0.8 } // L'animation se déclenche quand 50% de l'élément est visible
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect() // Nettoyage à la destruction du composant
  }, [])

  return (
    <section id="presentation">
      <div class="section-bg-black">
        <div class="section">
          <h2>Team</h2>
          <div class="container">
            <div class="presentation-card">
              <div class="presentation-text">
                <p>Nos intervenants sont des spécialistes de la sécurité, de la sûreté et de la prévention en santé et sécurité au travail, forts d’une expérience reconnue en France et à l’international.</p>
                <p>Ils conçoivent et mettent en œuvre des programmes de formation et d’accompagnement adaptés à chaque environnement et à chaque enjeu.</p>
                <p>Leur expertise se traduit par des solutions pragmatiques, efficaces et personnalisées, pour répondre concrètement aux besoins de votre organisation.</p>
              </div>
              <div class="presentation-img"><img src={team} loading="lazy" alt="Equipe de formation" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}