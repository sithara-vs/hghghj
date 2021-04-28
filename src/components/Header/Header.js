import React from 'react'
import './Header.css'
import logo from './logo.png';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className="header">
           <div className="title">
           <div className="logo">   
           <Link to='/'> 
           <img src={logo} alt="Logo" /> 
           </Link>
           <h1>
             YOGI'S YOGA
            </h1>
            </div>
            <li className="nav">
                <ul>
                <Link to='/'>
                    Home
                    </Link>
                </ul>
                <ul>
                <Link to='/instructors'>
                    Instructors
                    </Link>
                </ul>
                <ul>
                <Link to='/classes'>
                    Classes
                    </Link>
                </ul>
                <ul>
                <Link to='/contact'>
                   Contact us
                   </Link>
                </ul>

            </li>
              
            </div> 
           
            <li className="login">
    <ul>
    <Link to='/login'> 
        Login/Register 
        </Link>
        </ul>
</li>
        </div>
    )
}
