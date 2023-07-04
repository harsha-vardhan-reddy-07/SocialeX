import React, { useContext } from 'react'
import '../styles/ProfilePage.css'
import HomeLogo from '../components/HomeLogo'
import Navbar from '../components/Navbar'
import { AuthenticationContext } from '../context/AuthenticationContextProvider'

const Profile = () => {

  const {logout} = useContext(AuthenticationContext);

  return (
    <div className='profilePage'>
      <HomeLogo />
      <Navbar />

        <div className="profileCard">

        </div>
        <div className="profilePostsContainer">

        </div>
        <div className="followersContainer">

          <button onClick={async () => {await logout()}}>Logout</button>

        </div>
    </div>
  )
}

export default Profile