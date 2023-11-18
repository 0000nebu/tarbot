import React from 'react'
import homeImage from '../../assets/copas.png'
import flores from '../../assets/flores.png'
import calavera from '../../assets/calavera.png'
import title from '../../assets/name.png'
import star from '../../assets/estrella.png'
import { Link } from "react-router-dom";
import './HomePage.css'

function HomePage() {
  return (

    <>
      <span clasName='items'>
        <div className='cabecera'>
          <img className="copas" src={homeImage} alt="home-image" />
          <img className="title" src={title} alt="title-image" />
        </div>
        <img className='star' src={star} alt="star-image" />
        <img className='star-2' src={star} alt="star-image" />
        <p className="text-intro"> Tarbot your Modern Tarot Hub 🔮 Unleash the power of cosmic wisdom with our contemporary approach to tarot readings. Our user-friendly platform blends ancient mysticism with modern insights, providing personalized and judgment-free guidance. Whether you're a seasoned seeker or a tarot novice, join our vibrant journey of self-discovery. Embrace your magic, unlock your destiny ✨ </p>
        <div className='text-image'>
          <img className='flores' src={flores}alt="flores-image" />
      
        <img className='calavera' src={calavera}alt="calavera-image" />
        <div class="wrap">
          <Link to="/login">
            <button className="button home-button">Login</button>
          </Link>
          <Link to="/signUp">
            <button className="button home-button">Sign Up</button>
          </Link>
        </div>
        </div>
       
        
      </span>
    </>


  )
}

export default HomePage