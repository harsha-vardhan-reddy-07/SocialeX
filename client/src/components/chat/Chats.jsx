import React, { useContext, useEffect, useState } from 'react'
import {GeneralContext} from '../../context/GeneralContextProvider';
const Chats = () => {

  const {socket, chatFirends, setChatFriends, dispatch, chatData} = useContext(GeneralContext)

  const userId = localStorage.getItem('userId');

  // const [friendsData, setFriendsData] = useState([])

  useEffect(()=>{

    socket.emit('fetch-friends', {userId});

    socket.on("friends-data-fetched", ({friendsData})=>{
      setChatFriends(friendsData);
    });

  },[])

  
  const handleSelect = (data) =>{
    dispatch({type:"CHANGE_USER", payload: data});
    console.log(chatData);


  }
  useEffect(()=>{

    if(chatData.chatId !== null){
      socket.emit('fetch-messages', {chatId: chatData.chatId})
      
    }
  }, [chatData])



  return (
    <div className='chats'>
      
   {chatFirends.map((data)=>{

    return(
      <div className="userInfo" key={data._id} onClick={()=> handleSelect(data)} >  {/* using chatId (combinedId as key(unique id)) */}
        <img src={data.profilePic} alt="" />
        <div className="userChatInfo">
          <span>{data.username}</span>
        </div>
      </div>
    )

   })}
      

    
    </div>
  )
}

export default Chats