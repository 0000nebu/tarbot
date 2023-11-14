import React from 'react'
import {Link} from 'react-router-dom'
import profileImage from  '../../assets/profile.png'
import howImage from  '../../assets/como-funciona.png'
import readingImage from  '../../assets/reading.png'
import "./MenuPage.css"


function MenuPage() {
  return (
    <span className="menu">
      <Link to='/profile'>
      <img className="profileImage" src={profileImage} alt="profile-image" />
      </Link>
      <Link to='/reading-type'>
      <img className="readingleImage" src={readingImage} alt="readig-image" />
      </Link>
      <Link to='/howItWorks'> 
      <img className="howImage" src={howImage} alt="how-image" />
      </Link>
    </span>

  )
}

export default MenuPage