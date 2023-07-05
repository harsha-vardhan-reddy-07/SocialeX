import React from 'react'
import '../styles/SearchContainer.css';
import { useNavigate } from 'react-router-dom';

const Search = ({searchedUser}) => {
    const navigate = useNavigate();
  return (
    <div className="searchContainer">

        {searchedUser &&  <div className="searchedUserInfo" onClick={()=> navigate(`/profile/${searchedUser._id}`)} >
                <img src={searchedUser.profilePic} alt="" />
                <div className="searchedUserChatInfo">
                  <span>{searchedUser.username}</span>
                </div>
              </div>
            }

    </div>
  )
}

export default Search