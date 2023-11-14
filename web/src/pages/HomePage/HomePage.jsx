import React from 'react'
import homeImage from '../../assets/copas.png'
import title from '../../assets/name.png'
import { Link } from "react-router-dom";
import './HomePage.css'

function HomePage() {
  return (

    <>
      <span clasName='items'>
        <img className="copas" src={homeImage} alt="home-image" />
        <img className="title" src={title} alt="title-image" />
        <p className="text-intro"> Tarbot your Modern Tarot Hub 🔮 Unleash the power of cosmic wisdom with our contemporary approach to tarot readings. Our user-friendly platform blends ancient mysticism with modern insights, providing personalized and judgment-free guidance. Whether you're a seasoned seeker or a tarot novice, join our vibrant journey of self-discovery. Embrace your magic, unlock your destiny ✨ </p>
        <div class="wrap">
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
          <Link to="/signUp">
            <button className="button">Sign Up</button>
          </Link>
        </div>
      </span>
    </>


  )
}

export default HomePage