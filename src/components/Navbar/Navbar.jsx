import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import logo_black from '../../assets/logo-black.png'
import logo_white from '../../assets/logo-white.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github_.png'

const navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 700 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`containe ${sticky ? 'darknav' : ''}`}>
      <img src={logo_white} alt=""  className='logo'/>
      <ul>
        <li className='texts'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className='texts'><Link to='programs' smooth={true} offset={-300} duration={500}>About Me</Link></li>
        <li className='texts'><Link to='about' smooth={true} offset={-250} duration={500}>Projects</Link></li>
        <li className='texts'><Link to='about' smooth={true} offset={-250} duration={500}>Research Works</Link></li>
        <li className='texts'><Link to='contact' smooth={true} offset={-280} duration={500}>Contact Me</Link></li>
        {/* <li><Link to='contact' smooth={true} offset={-300} duration={500} className='btn  btn-hover1'>Contact Me</Link></li> */}
        <li>
          <div>
            <li><a href=""><img src={linkedin} alt=""  /></a></li>
            <li><a href=""><img src={github} alt="" /></a></li>
          </div>
        </li>
      </ul>
      
    </nav>
  )
}

export default navbar
