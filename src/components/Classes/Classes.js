// import React from 'react'
// import Header from '../Header/Header'

// export default function Classes() {
//     return (
//         <div>
//              <Header/>

//         Classes!

//              </div>
//     )
// }

// import React from 'react'
// import Header from '../Header/Header'
// import axios from 'axios'
// import './Instructors.css'

// export default function Instructors() {

//     const getInstructors = () => {
//         axios.get('/api/instructors/')
//       }

//     return (
//         <div>
//                 <Header/>
//                 <div className="instructors_body">
//                 These are our instructors !

//                 </div>

//         </div>
//     )
// }

import React from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Classes.css";

export default class PersonList extends React.Component {
  state = {
    classes: [],
  };

  componentDidMount() {
    axios.get("/api/classes").then((res) => {
      const classes = res.data;
      this.setState({ classes });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <ul>
          {this.state.classes.map((classes) => {
            return (
              <li>
                {classes.day_of_the_week}
                <p> {classes.description}</p>
                <p>{classes.participants}</p>
                <p>{classes.price}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
