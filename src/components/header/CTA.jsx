import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Baixar Currículo</a>
        <a href='#contact' className='btn btn-primary'>Converse comigo!</a>
    </div>
  )
}

export default CTA