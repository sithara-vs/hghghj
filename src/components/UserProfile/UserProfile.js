import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserProfile.css";
import Header from "../Header/Header";
import { update_email, update_password } from "../../redux/userReducer";
import { connect } from "react-redux";
import Bookings from "../Bookings/Bookings"

function UserProfile(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitEmail() {
    if (props.user.email) {
      props.update_email(email);
    }
    const notify = () => toast("Email updated!");
    notify();
  }

  function handleSubmitPassword() {
    if (props.user.email) {
      props.update_password(password);
    }
    const notify = () => toast("Password updated!");
    notify();
  }

  return (
    <div className="userBod">
      <background-image
        className="yogaCover"
        src="https://images.pexels.com/photos/268134/pexels-photo-268134.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />

      <div className="userBody">
        <img
          className="yogaImage"
          src="https://images.pexels.com/photos/268134/pexels-photo-268134.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      </div>
      <div className="profile">
        <div className="user">
          <h1 className="wordcolor1"> Welcome </h1>
        </div>
        <ToastContainer />
        <h4 className="wordcolor">Change email?</h4>
        <div>
          <p className="wordcolor">Please enter new email </p>
          <input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmitEmail}>Submit</button>
        </div>
        <h4 className="wordcolor">Change Password?</h4>
        <div>
          <p className="wordcolor">Please enter new password </p>
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Please enter new password one more time{" "}
          <input placeholder="Enter Password" type="password" /> */}
          <button onClick={handleSubmitPassword}>Submit</button>
          <div className="test">
            <div className="element"></div>
            <div className="element">A</div>
            <div className="element">L</div>
          </div>
        </div>
      </div>
      <div className="userBody">
        <img
          className="yogaImage2"
          src="https://images.pexels.com/photos/268134/pexels-photo-268134.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
      </div>
      <Bookings/>
    </div>
  );
}
const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = {
  update_email,
  update_password,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
