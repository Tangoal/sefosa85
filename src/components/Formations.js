import React from 'react'
import './Formations.css'

export default function Formations() {
  return (
    <section id="formations">
      <div class="formations-bg">
        <div class="section">
          <h2>Formations</h2>
          <div class="formations-container">
            <div class="formations-cat">
              <h3>Secourisme</h3>
              <ul>
                <li>SST et MAC SST</li>
                <li>PSC1</li>
                <li>Gestes Qui Sauvent</li>
                <li>Premiers Secours en Équipe de niveau 1 et 2</li>
                <li>Stop the bleed ®</li>
                <li>Secourisme adapté</li>
              </ul>
            </div>
            <div class="formations-cat">
              <h3>Incendie</h3>
              <ul>
                <li>Manipulation d'extincteur</li>
                <li>Évacuation</li>
                <li>Équipier de Première Intervention</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}