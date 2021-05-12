import React ,{useState}from "react";

import "./UserProfile.css";
import Header from "../Header/Header";
import { update_email } from "../../redux/userReducer";
import { connect } from "react-redux";

function UserProfile(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (props.user.email) {
      props.update_email(email);
    }
  }

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
          <input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
          
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
const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = {
  update_email,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
