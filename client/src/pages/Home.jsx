import React from 'react';
import '../styles/Home.css';
import Post from '../components/Post';
import HomeLogo from '../components/HomeLogo';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className='homePage'>
      <HomeLogo />
      <Navbar />
      <Post />
    </div>
  )
}

export default Home