import React, { useState } from "react";
import {toast,ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./UserProfile.css";
import Header from "../Header/Header";
import { update_email , update_password} from "../../redux/userReducer";
import { connect } from "react-redux";

function UserProfile(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitEmail() {
    
    if (props.user.email) {
      props.update_email(email);
    }
    const notify = () => toast("Email updated!");
    notify()
  }

  function handleSubmitPassword() {

    if (props.user.email) {
      props.update_password(password);
    }
    const notify = () => toast("Password updated!");
    notify()
  }

  return (
    <div>
      <Header />
      <div>
        <div className="user">
          <h4>Your Bookings</h4>
        </div>
        <ToastContainer/>
        <h4>Change email?</h4>
        <div>
          Please enter new email{" "}
          <input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmitEmail}>Submit</button>
        </div>
        <h4>Change Password?</h4>
        <div>
          Please enter new password{" "}
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          Please enter new password one more time{" "}
          <input placeholder="Enter Password" type="password" />
          <button onClick={handleSubmitPassword}>Submit</button>
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
const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = {
  update_email,
  update_password
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
