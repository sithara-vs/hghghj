import React from "react";
import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/userReducer";

function Header(props) {
  return (
    <div className="header">
      <div className="title">
        <div className="logo">
          <Link to="/">
            <img className="imgclass" src={logo} alt="Logo" />
          </Link>
          <h1 className="h1class">YOGI'S YOGA</h1>
        </div>
        <li className="nav">
          <ul className="ulclass">
            <Link to="/">Home</Link>
          </ul>
          <ul className="ulclass">
            <Link to="/instructors">Instructors</Link>
          </ul>
          <ul className="ulclass">
            <Link to="/classes">Classes</Link>
          </ul>
          <ul className="ulclass">
            <Link to="/contact">Contact us</Link>
          </ul>
        </li>
      </div>
      {props.user.email ? (
        <Link to="/">
          <p onClick={props.logout}>logout</p>{" "}
        </Link>
      ) : (
        <Link to="/login">
          <p>Login/Register</p>
        </Link>
      )}
      <br></br>
      {props.user.email ? (
        <Link to="/users">
          <p className="star">.</p>{" "}
        </Link>
      ) : (
        <Link to="/login">
          <p></p>
        </Link>
      )}

      <li className="login">
        {/* <ul className="ulclass">
          <Link to="/login">Login/Register</Link>
        </ul> */}
      </li>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
