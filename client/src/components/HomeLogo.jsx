import React, { useContext, useEffect, useState } from 'react';
import logoimg from '../images/SocialeX.png';
import '../styles/HomeLogo.css';
import { TbSearch } from 'react-icons/tb';
import { GeneralContext } from '../context/GeneralContextProvider';
import Search from './Search';

const HomeLogo = () => {

  const {socket} = useContext(GeneralContext);

  const [search, setSearch] = useState('');
  const [searchedUser, setSearchedUser] = useState();

  const handleSearch =async ()=>{
    socket.emit('user-search', {username: search})
  }

  useEffect(()=>{
    socket.on('searched-user', ({user})=>{
      setSearchedUser(user);
    });
  },[socket])


  return (
    <div className="LogoSearch">
       <img className='logoImg' src={logoimg} alt="" />
       <div className="Search">
           <input type="text" placeholder='Search' onChange={(e)=> {setSearch(e.target.value)}} />
           <div className="s-icon" onClick={handleSearch}>
              <TbSearch />
           </div>
       </div>
       <Search searchedUser={searchedUser} />
   </div>
  )
}

export default HomeLogo