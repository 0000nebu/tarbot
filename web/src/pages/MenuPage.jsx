import React from 'react'
import profileImage from  '../assets/profile.png'
import howImage from  '../assets/como-funciona.png'
import readingImage from  '../assets/reading.png'
import "./MenuPage.css"


function MenuPage() {
  return (
    <span className="menu">
      <img className="profileImage" src={profileImage} alt="profile-image" />
      <img className="readingleImage" src={readingImage} alt="readig-image" />
      <img className="howImage" src={howImage} alt="how-image" />
    </span>

  )
}

export default MenuPage