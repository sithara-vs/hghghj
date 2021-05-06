import React from "react";

import "./UserProfile.css";
import Header from "../Header/Header";
import HeaderLogin from "../Header/HeaderLogin";

export default function UserProfile() {
  return (
    <div>
      <Header />
      <div>
        <div className="user">
          <h4>Your Bookings</h4>
        </div>
        <h4>Change email?</h4>
        <div>
          Please enter new email{" "}
          <input placeholder="Enter Email" type="email" />
          <button>Submit</button>
        </div>
        <h4>Change Password?</h4>
        <div>
          Please enter new password{" "}
          <input placeholder="Enter Password" type="password" />
          Please enter new password one more time{" "}
          <input placeholder="Enter Password" type="password" />
          <button>Submit</button>
          <div className="test">
            <div className="element"></div>
            <div className="element">A</div>
            <div className="element">L</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
