import React from 'react'
import Header from '../Header/Header'
import './Contact.css'
import yogaicon from './assets/yoga.png'


export default function Contact() {
    return (
        <div>

<Header/>

<div className="envelope">

    <div className="left">
    <h1 className= "contact">CONTACT US</h1>
    <h3 className="h3class">WE WOULD LOVE TO HEAR FROM YOU!</h3>

</div>
<div className="address">
    <img className="yogaicon" src = {yogaicon} alt = "yoga icon"/>
    <div className="right">
    <p className="add"> YOGI'S YOGA</p>
    
    <p className="add"> 73 Maple Street</p>
    <p className="add"> New York city</p>
    <p className="add"> New York</p>
    <p className="add"> 45567</p>
    <p className="add"> Ph no: 234-234-1234</p>
    <p className="add"> email: asd@gmail.com</p>
    </div>
</div>

</div>
</div> 
       
    )
}


