import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/logo1.png', 
      alt:'Partner'
    },
    {
      src: '/images/logo2.png', 
      alt:'Partner'
    },
    {
      src: '/images/logo3.png', 
      alt:'Partner'
    },
    {
      src: '/images/logo4.png', 
      alt:'Partner'
    },
    {
      src: '/images/logo5.png', 
      alt:'Partner'
    },
    {
      src: '/images/logo6.png', 
      alt:'Partner'
    }, {
      src: '/images/logo7.png', 
      alt:'Partner'
    },
    {
      src: '/images/logo8.png', 
      alt:'Partner'
    }
  ]
  return (
    <Div className="cs-partner_logo_wrap col-md-12 flex">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img className='   m-auto rounded-5 bg-success p-2' src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
