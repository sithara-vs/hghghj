import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register, login } from "../../redux/userReducer";
import Header from "../Header/Header";
import HeaderLogin from "../Header/HeaderLogin";
import "./LandingLogin.css";
import member from "./assets/member.png";

function LandingLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);

  const buttonContent = registering ? "Register" : "Login";
  const pContent = registering
    ? "Already have an account?"
    : "Don't have an account?";
  const spanContent = registering
    ? "Click here to login"
    : "Click here to register";

  function handleSubmit() {
    if (registering) {
      props.register(email, password);
    }
    if (!registering) {
      props.login(email, password);
    }
  }

  if (props.user.email) return <Redirect to="/" />;

  return (
    <div>
      <div >
        <form className="loginBody"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            setEmail("");
            setPassword("");
          }}
        >
          <div className="welcome">
            {/* <img src="./member.png">Member Login</img> */}
            <img className="member-icon" src={member} alt="member-icon" />
            <h2 className="h2landingclass">Member Login</h2>

            <div className="input">
              <input
                className="input-box"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="input-box"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button">{buttonContent}</button>
              <h3>{props.user.errorMessage}</h3>
            </div>
            <div className="account">
              <p>{pContent}</p>
              <p>
                {" "}
                <span
                  className="register"
                  onClick={() => setRegistering(!registering)}
                >
                  {spanContent}
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = {
  register,

  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingLogin);
