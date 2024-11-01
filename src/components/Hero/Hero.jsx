import React from 'react'
import './Hero.css'
import profile_1 from '../../assets/profile-1.png'
import profile_2 from '../../assets/profile-2.jpg'
import arrow_right from '../../assets/arrow-right.png'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-content">
        <img src={profile_1} alt="" className='profile'/>
        <h1>Hi! I'm Manjil Nepal</h1>
        <button className='btn btn-dark explore'>Explore More <img src={arrow_right} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
