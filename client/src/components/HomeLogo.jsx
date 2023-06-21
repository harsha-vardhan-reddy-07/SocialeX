import React from 'react';
import logoimg from '../images/SocialeX.png';
import '../styles/HomeLogo.css';
import { TbSearch } from 'react-icons/tb';

const HomeLogo = () => {
  return (
    <div className="LogoSearch">
       <img className='logoImg' src={logoimg} alt="" />
       <div className="Search">
           <input type="text" placeholder='Search' />
           <div className="s-icon">
              <TbSearch />
           </div>
       </div>
   </div>
  )
}

export default HomeLogo