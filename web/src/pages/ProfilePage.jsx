import React from 'react'
import star from '../assets/estrella.png'
import UserProfile from '../components/profile/UserProfile'
import ReadingsList from '../components/readings/ReadingsList'
import './ProfilePage.css'


function ProfilePage() {
  return (
    <div className='main-profile'>
    <div className='header-profile'>
      <img className='star-profile-1' src={star} alt="star-image" />
      <UserProfile />
      <img className='star-profile-2'src={star} alt="star-image" />
    </div>
    <div>
      <ReadingsList />
    </div>
    </div> 
    
  )
}

export default ProfilePage