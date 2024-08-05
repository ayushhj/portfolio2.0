import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/a-icon1.png"




const Navbar = () => {

  return (
    <div>
        <div className='Main-nav' >
            <div className='Nav-logo' >
                 <img className='nav-logo-img'  src={logo}/>
            </div>
        <div className='Nav-items' >
            <ul className='Nav-items-list'  >
                <li>
                    <Link to="/" className='Link-item'  >Work</Link>  
                </li>
                <li>
                    <Link to="/" className='Link-item'  >About</Link>
                    
                </li>
                <li>
                    <Link to="/" className='Link-item'  >Connect</Link>       
                </li>
            </ul>

        </div>


        </div>
   



    </div>
  )
}

export default Navbar