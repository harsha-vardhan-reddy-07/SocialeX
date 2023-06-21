import React from 'react';
import '../styles/Posts.css';
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import {IoIosPersonAdd} from 'react-icons/io'
import postImg from '../images/nav-profile.avif';
import postImg1 from '../images/landing-pic.png';

const Post = () => {
  return (
    <div className='postsContainer'>


        

        <div className="Post">

            <div className="postTop">
                <div className="postTopDetails">
                    <img src={postImg} alt="" className="userpic" />
                    <h3 className="usernameTop">Username</h3>
                </div>
                <IoIosPersonAdd id='addFriendInPost' />
            </div>

            <img className='postimg' src={postImg} alt="" />

            <div className="postReact">
                <div className="supliconcol">
                    <AiTwotoneHeart className='support reactbtn' name='support'/>
                    <label htmlFor="support" className='supportCount'>10</label>
                </div>
                <BiCommentDetail className='comment reactbtn' />
                <FiSend className='share reactbtn' />
                <div className="placeiconcol">
                    <FaGlobeAmericas className='placeicon reactbtn' name='place' />
                    <label htmlFor="place" className='place'>location</label>
                </div>
            </div>

            <div className="detail">
                <div className='descdataWithBtn'>
                    <label htmlFor='username' className="desc labeldata" id='desc'> 
                        <span style={{fontWeight: 'bold'}}>
                            username
                        </span> 
                            &nbsp;   description will be displayed
                    </label>
                </div>
            </div>
        </div>


        <div className="Post">

        <div className="postTop">
                <div className="postTopDetails">
                    <img src={postImg} alt="" className="userpic" />
                    <h3 className="usernameTop">Username</h3>
                </div>
                <IoIosPersonAdd id='addFriendInPost' />
            </div>

            <img className='postimg' src={postImg1} alt="" />

            <div className="postReact">
                <div className="supliconcol">
                    <AiOutlineHeart className='support reactbtn' name='support'/>
                    
                    <label htmlFor="support" className='supportCount'>10</label>
                </div>
                <BiCommentDetail className='comment reactbtn' />
                <FiSend className='share reactbtn' />
                <div className="placeiconcol">
                    <FaGlobeAmericas className='placeicon reactbtn' name='place' />
                    <label htmlFor="place" className='place'>location united arab emirates</label>
                </div>
            </div>

            <div className="detail">
                <div className='descdataWithBtn'>
                    <label htmlFor='username' className="desc labeldata" id='desc'> 
                        <span style={{fontWeight: 'bold'}}>
                            username
                        </span> 
                            &nbsp;   description will be displayed
                    </label>
                </div>
            </div>
        </div>







    </div>
  )
}

export default Post