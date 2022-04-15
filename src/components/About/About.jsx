import React from 'react'
import './About.css'
import ME from './../../assets/me-about.gif'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'> 
      <h5>Me conheça</h5>
      <h2>Sobre mim</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experiência</h5>
              <small>0-1 anos de experiência</small>

            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clientes</h5>
              <small>0-1 anos de experiência</small>

            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experiência</h5>
              <small>0-1 anos de experiência</small>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About