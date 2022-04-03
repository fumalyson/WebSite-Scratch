import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/ME.png'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Olá, eu sou </h5>
        <h1> Alyson Bergantini </h1>
        <h5 className='text-light'> Fullstack Devloper </h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll_down'> Role pra Baixo </a>
      </div>
    </header>
  )
}

export default header