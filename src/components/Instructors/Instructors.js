
import React, { useState,useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Instructors.css";


export default function PersonList(props){
  const [instructors, setInstructors] = useState([]);



  axios.get("/api/instructors").then((res) => {
    const instructors = res.data;
    setInstructors(instructors );
  }); 

  useEffect(() => {
    axios.get("/api/instructors").then((res) => {
      const instructors = res.data;
      setInstructors(instructors );
    }); 
},[]);
 
  
    return (
      <div className="bod">
       
       
          <h1 className="meet"> Meet our Instructors!</h1>
          <div className="layout">
            {instructors.map((instructors) => {
              return (
                <div classname="instructors">
                  <img className="layout1" src={instructors.image} />

                  <p className="about">{instructors.about}</p>
                </div>
              );
            })}
          </div>
        
      </div>
    );
  }






// import React from "react";
// import Header from "../Header/Header";
// import axios from "axios";
// import "./Instructors.css";

// export default class PersonList extends React.Component {
//   state = {
//     instructors: [],
//   };


//   componentDidMount() {
//     axios.get("/api/instructors").then((res) => {
//       const instructors = res.data;
//       this.setState({ instructors });
//     });
//   }

//   render() {
//     return (
//       <div className="bod">
//         {/* <Header /> */}
       
//           <h1 className="meet"> Meet our Instructors!</h1>
//           <div className="layout">
//             {this.state.instructors.map((instructors) => {
//               return (
//                 <div classname="instructors">
//                   <img className="layout1" src={instructors.image} />

//                   <p className="about">{instructors.about}</p>
//                 </div>
//               );
//             })}
//           </div>
        
//       </div>
//     );
//   }
// }
