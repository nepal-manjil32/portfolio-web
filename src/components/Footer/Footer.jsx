import React from 'react'
import './Footer.css'

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <div className='footer'>
        <p>© {year} Manjil Nepal. All rights reserved.</p>
    </div>
  )
}

export default Footer
