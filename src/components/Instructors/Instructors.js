import React from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Instructors.css";

export default class PersonList extends React.Component {
  state = {
    instructors: [],
  };

  componentDidMount() {
    axios.get("/api/instructors").then((res) => {
      const instructors = res.data;
      this.setState({ instructors });
    });
  }

  render() {
    return (
      <div className="bod">
        <Header />
        <div>
          <p>
            {this.state.instructors.map((instructors) => {
              return (
                <p classname="instructors">
                  <img src={instructors.image} />

                  <p classname="instructors">{instructors.about}</p>
                </p>
              );
            })}
          </p>
        </div>
      </div>
    );
  }
}
