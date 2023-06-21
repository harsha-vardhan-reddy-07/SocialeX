import React from 'react'
import '../styles/ProfilePage.css'
import HomeLogo from '../components/HomeLogo'
import Navbar from '../components/Navbar'

const Profile = () => {
  return (
    <div className='profilePage'>
      <HomeLogo />
      <Navbar />

        <div className="profileCard">

        </div>
        <div className="profilePostsContainer">

        </div>
        <div className="followersContainer">

        </div>
    </div>
  )
}

export default Profile