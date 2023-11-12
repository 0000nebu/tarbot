import React from 'react'
import MultiReadingCard from  '../../assets/multi.png'
import SimpleReadingCard from  '../../assets/guidecar.png'


function ReadingMenu() {
  return (
    <span className="menu">
      <img className="profileImage" src={MultiReadingCard} alt="profile-image" />
      <img className="readingleImage" src={SimpleReadingCard} alt="readig-image" />
    </span>

  )
}

export default ReadingMenu