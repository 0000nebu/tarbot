import React from 'react'
import {Link} from 'react-router-dom'
import MultiReadingCard from  '../../assets/multi.png'
import SimpleReadingCard from  '../../assets/guidecar.png'


function ReadingMenu() {
  return (
    <span className="menu">
    <Link to='/multi-reading'>
      <img className="profileImage" src={MultiReadingCard} alt="profile-image" />
      </Link>
      <Link to='/single-reading'>
      <img className="readingleImage" src={SimpleReadingCard} alt="readig-image" />
      </Link>
    </span>

  )
}

export default ReadingMenu