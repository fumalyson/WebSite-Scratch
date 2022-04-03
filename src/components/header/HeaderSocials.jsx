import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/alyson-fernando-de-araujo-bergantini-22739920a/" > <BsLinkedin/> </a>

        <a href="https://www.github.com/fumalyson"> <FaGithub /> </a>

        <a href="https://wa.me/55044999046910"> <FaWhatsapp /> </a>
    </div>
  )
}

export default HeaderSocials