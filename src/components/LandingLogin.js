import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../redux/userReducer'

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
            <h1>Yogi's Yoga</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
                setEmail('')
                setPassword('')
            }}>
                <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                <button>{buttonContent}</button>
                <p>
                    {pContent}
                    <span onClick={() => setRegistering(!registering)}>{spanContent}</span>
                </p>
            </form>
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