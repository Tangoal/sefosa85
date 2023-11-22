import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=61552012141723" title="Facebook" target="_blank"><i className="fab fa-square-facebook"></i></a>
                <a href="https://www.linkedin.com/company/sefosa/" title="LinkedIn" target="_blank"><i className="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/sefosa85" title="Instagram" target="_blank"><i className="fab fa-square-instagram"></i></a>
            </div>
            <div className="footer-legal">
                <p><Link to="/mentions-legales" title="Mentions Légales">Mentions Légales</Link></p>
                <p><a href="#" id="open_preferences_center">Préférences sur les Cookies</a></p>
            </div>
            <div className="footer-signature">
                <p> Créé par <a href="https://www.linkedin.com/in/tanguy-le-pors/" title="Tanguy Le Pors" target="_blank">Tanguy Le Pors</a></p>
            </div>
        </footer>
    )
}