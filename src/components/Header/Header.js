import React from "react";
import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
export default function Header() {
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

      <li className="login">
        <ul className="ulclass">
          <Link to="/login">Login/Register</Link>
        </ul>
      </li>
    </div>
  );
}
