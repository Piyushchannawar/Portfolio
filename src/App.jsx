import React from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import Heromain from './sections/Heromain'
import Herocombine from './sections/Herocombine'

const App = () => {
  return (
    <>
    {/* Header section */}
    <Header />


    {/* hero */}
    {/* <Hero /> */}
    {/* <Heromain /> */}
    <Herocombine />

    {/* Projects */}
    <Projects />

    {/* About */}
    <About />

    {/* Skills */}
    <Skills />

    {/* contact */}
    <Contact />

    {/* Footer */}
    <Footer />
    </>
  )
}

export default App