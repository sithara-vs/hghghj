import React from 'react'
import './HeaderLogin.css'
import logo from './logo.png';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className="header">
           <div className="title">
           
           <div className="logo">   
           <Link to='/'> 
           <img className="imgloginclass" src={logo} alt="Logo" /> 
           </Link>
           
           <h1 className="h1loginclass">
             YOGI'S YOGA
            </h1>
            </div>
            <li className="nav">
                <ul className="ulloginclass">
                <Link to='/'>
                    Home
                    </Link>
                </ul>
                <ul className="ulloginclass">
                <Link to='/instructors'>
                    Instructors
                    </Link>
                </ul>
                <ul className="ulloginclass">
                <Link to='/classes'>
                    Classes
                    </Link>
                </ul>
                <ul className="ulloginclass">
                <Link to='/contact'>
                   Contact us
                   </Link>
                </ul>

            </li>
              
            </div> 
           
            <li className="login">
    <ul className="ulloginclass">
    <Link to='/logout'> 
        Logout 
        </Link>
        </ul>
</li>
<Link to = '/users'>
<div className="star">
               <article>
               {/* <Link to = '/users'>
               Click
               </Link> */}
               </article>
               
           </div>
           </Link>
        </div>
    )
}
