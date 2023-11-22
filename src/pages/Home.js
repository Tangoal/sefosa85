import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Valeurs from '../components/Valeurs'
import Presentation from '../components/Presentation'
import Formations from '../components/Formations'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Valeurs />
            <Presentation />
            <Formations />
            <Contact />
            <Footer />
        </>
    )
}