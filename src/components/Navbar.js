import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="sticky-bar">
        <ul>
            <li><a href="#valeurs">SeFoSa</a></li>
            <li><a href="#presentation">Team</a></li>
            <li><a href="#formations">Formations</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}