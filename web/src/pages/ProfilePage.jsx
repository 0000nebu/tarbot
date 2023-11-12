import React from 'react'

import UserProfile from '../components/profile/UserProfile'
import ReadingsList from '../components/readings/ReadingsList'


function ProfilePage() {
  return (
    <>
    <UserProfile/>
    <div>
    <ReadingsList />
    </div>
    </>
  )
}

export default ProfilePage