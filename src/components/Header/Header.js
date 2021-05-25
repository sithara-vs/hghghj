import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/userReducer";

function Header(props) {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  function toggleMenu() {
    setisMenuOpen(!isMenuOpen);
  }
  let shouldShow = isMenuOpen ? "mobile-nav-bar-show" : null;

  return (
    <div className="header">
      <div className="title">
        <div className="logo">
          <Link to="/">
            <img className="imgclass" src={logo} alt="Logo" />
          </Link>
          <h1 className="h1class">YOGI'S YOGA</h1>
        </div>

        <div className="hamburger">
          <p>Menu</p>
          <img
            onClick={() => toggleMenu()}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          />
        </div>

        <p className={`mobile-nav-bar ${shouldShow}`}>
          {/* <button onClick={isMenuOpen}> X </button> */}

          <li className="mobile-ulclass">
            <Link to="/">Home</Link>
          </li>
          <li className="mobile-ulclass">
            <Link to="/instructors">Instructors</Link>
          </li>
          <li className="mobile-ulclass">
            <Link to="/classes">Classes</Link>
          </li>
          <li className="mobile-ulclass">
            <Link to="/contact">Contact us</Link>
          </li>
          {props.user.email ? (
            <li className="logout">
              <Link to="/" className="logout" onClick={props.logout}>
                Logout
              </Link>
            </li>
          ) : (
            <Link to="/login">
              <p>Login/Register</p>
            </Link>
          )}

          {props.user.email ? (
            <Link to="/users">
              {/* <p className="star">.</p>{" "} */}
              <img className="gear" src="http://simpleicon.com/wp-content/uploads/setting2.svg"/>
             
            </Link>
          ) : (
            <Link to="/login">
              <p></p>
            </Link>
          )}
        </p>

        <div className="wholeNav">
          <ul className="nav">
            <li className="ulclass">
              <Link to="/">Home</Link>
            </li>
            <li className="ulclass">
              <Link to="/instructors">Instructors</Link>
            </li>
            <li className="ulclass">
              <Link to="/classes">Classes</Link>
            </li>
            <li className="ulclass">
              <Link to="/contact">Contact us</Link>
            </li>
            <div className="logs">
              {props.user.email ? (
                <div >
                <Link to="/">
                  <p className="out" onClick={()=>props.logout()} >
                    Logout
                  </p>{" "}
                </Link>
                </div>
              ) : (
                <Link to="/login">
                  <p className="reg">Login/Register</p>
                </Link>
              )}

              {props.user.email ? (
                <Link to="/users">
                  {/* <p className="star">.</p>{" "} */}
                  <img className="gear" src="http://simpleicon.com/wp-content/uploads/setting2.svg"/>
                </Link>
              ) : null}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (reduxState) => reduxState;

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// import React, { Component } from "react";
// import "./Header.css";
// import logo from "./logo.png";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { logout } from "../../redux/userReducer";

// class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMenuOpen: false,
//     };
//   }

//   toggleMenu = () => {
//     this.setState({
//       isMenuOpen: !this.state.isMenuOpen,
//     });
//   };

//   render() {
//     let { isMenuOpen } = this.state;
//     let shouldShow = isMenuOpen ? "mobile-nav-bar-show" : null;

//     return (
//       <div className="header">
//         <div className="title">
//           <div className="logo">
//             <Link to="/">
//               <img className="imgclass" src={logo} alt="Logo" />
//             </Link>
//             <h1 className="h1class">YOGI'S YOGA</h1>
//           </div>

//           <div className="hamburger">
//             <p>Menu</p>
//             <img
//               onClick={() => this.toggleMenu()}
//               src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
//             />
//           </div>

//           <p className={`mobile-nav-bar ${shouldShow}`}>
//             <button
//               onClick={() => {
//                 this.setState({ isMenuOpen: false });
//               }}
//             >
//               {" "}
//               X{" "}
//             </button>

//             <li className="mobile-ulclass">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="mobile-ulclass">
//               <Link to="/instructors">Instructors</Link>
//             </li>
//             <li className="mobile-ulclass">
//               <Link to="/classes">Classes</Link>
//             </li>
//             <li className="mobile-ulclass">
//               <Link to="/contact">Contact us</Link>
//             </li>
//             {this.props.user.email ? (
//               <li className="logout">
//                 <Link to="/" className="logout" onClick={this.props.logout}>
//                   Logout
//                 </Link>
//               </li>
//             ) : (
//               <Link to="/login">
//                 <p>Login/Register</p>
//               </Link>
//             )}

//             {this.props.user.email ? (
//               <Link to="/users">
//                 <p className="star">.</p>{" "}
//               </Link>
//             ) : (
//               <Link to="/login">
//                 <p></p>
//               </Link>
//             )}

//           </p>

//           <div className="wholeNav">
//             <ul className="nav">
//               <li className="ulclass">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="ulclass">
//                 <Link to="/instructors">Instructors</Link>
//               </li>
//               <li className="ulclass">
//                 <Link to="/classes">Classes</Link>
//               </li>
//               <li className="ulclass">
//                 <Link to="/contact">Contact us</Link>
//               </li>
//               <div className="logs">
//                 {this.props.user.email ? (
//                   <Link to="/">
//                     <p className="out" onClick={this.props.logout}>logout</p>{" "}
//                   </Link>
//                 ) : (
//                   <Link to="/login">
//                     <p className="reg">Login/Register</p>
//                   </Link>
//                 )}

//                 {this.props.user.email ? (
//                   <Link to="/users">
//                     <p className="star">.</p>{" "}
//                   </Link>
//                 ) : null}
//               </div>
//             </ul>

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (reduxState) => reduxState;

// export default connect(mapStateToProps)(Header);
