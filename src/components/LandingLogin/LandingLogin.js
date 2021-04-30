import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/userReducer'
import Header from '../Header/Header'
import "./LandingLogin.css"

function LandingLogin(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registering, setRegistering] = useState(false);

    const buttonContent = registering ? "Register" : "Login";
    const pContent = registering ? "Already have an account?" : "Don't have an account?";
    const spanContent = registering ? "Click here to login" : "Click here to register";

    function handleSubmit() {
        if(registering) {
            props.registerUser(email, password)
        }

        // props.loginUser(email, password)
    }

    return (
        <div>
               <Header/>
               <div className= "body">
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
                setEmail('')
                setPassword('')
            }}>
                <div className="welcome">
                <h2>WELCOME</h2>   
                
                <div className="input">
                <input  type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input  type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                <button>{buttonContent}</button>
                </div>
                
                <p className="account">
                    {pContent}</p>
                 <p>   <span className="register" onClick={() => setRegistering(!registering)}>{spanContent}</span>
                </p> 
               
                </div>
            </form>
            </div>
        </div>
    )
}

// const mapStateToProps = reduxState => {
//     return {

//     }
// }

const mapDispatchToProps = {
    registerUser
}

export default connect(null, mapDispatchToProps)(LandingLogin);