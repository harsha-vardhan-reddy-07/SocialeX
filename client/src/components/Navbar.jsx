import React, { useContext, useEffect, useState } from 'react';
import "../styles/Navbar.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { TbNotification } from "react-icons/tb";
import navProfile from '../images/nav-profile.avif';
import { GeneralContext } from '../context/GeneralContextProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {

  const {isCreatPostOpen, setIsCreatePostOpen, isNotificationsOpen, setNotificationsOpen} = useContext(GeneralContext);

  const navigate = useNavigate();

  const profilePic = localStorage.getItem('profilePic');
  const userId = localStorage.getItem('userId');

  
   return (
    <>
    <div className="Navbar">
        <BiHomeAlt className="homebtn btns" onClick={()=> navigate('/')} />
        <BsChatSquareText  className="chatbtn btns" />
        <CgAddR className="createPostbtn btns" onClick={()=> setIsCreatePostOpen(!isCreatPostOpen)} />
        <TbNotification className="Notifybtn btns" onClick={()=> setNotificationsOpen(!isNotificationsOpen)}/>
        <img className="profile" src={profilePic} alt="" onClick={()=> navigate(`/profile/${userId}`)} />
    </div>



    </>
  )
}

export default Navbar