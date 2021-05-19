import React from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Classes.css";
import search from "./search.png";
import { Link } from "react-router-dom";

export default class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      search: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.day = this.day.bind(this);
    this.handleParticipants = this.handleParticipants.bind(this);
  }

  handleParticipants(classId, change) {
    console.log("Hit handleParticipants", { classId, change });
    const updatedClasses = this.state.classes.map((c) => {
      if (c.class_id == classId) {
        console.log("Hit our class");
        let newParticipants = c.participants + change;
        console.log(newParticipants);
        let newTotal = newParticipants * c.price;
        console.log(newTotal);
        return { ...c, participants: newParticipants, total: newTotal };
      } else {
        return c;
      }
    });
    console.log(updatedClasses);
    this.setState({
      classes: updatedClasses,
    });
  }

  handleSearch(e) {
    console.log(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  day() {
    axios.get(`/api/classes/${this.state.search}`).then((res) => {
      const classes = res.data;
      const classesWithParticipantsAndTotals = classes.map((c) => {
        return { ...c, total: 0, participants: 0 };
      });
      this.setState({ classes: classesWithParticipantsAndTotals });
      if (!res.data) {
        console.log("Not found");
      }
    });
  }

  handleBooking = (classId) => {
    const classData = this.state.classes.filter((c) => c.id == classId);

    if (window.confirm("Are you sure you want to book?")) {
      //use class data to post bookings.Use class data to make axios post to bookings table.
      //Get user_id off of redux
      //This is where stripe interaction will happen.
      //After everything is finished reset state for this class.
      // React Toastify pops up to show Success or Failure
      console.log("Successfully booked!");
    } else {
      console.log("Booking refused!");
    }
  };

  componentDidMount() {
    axios.get("/api/classes").then((res) => {
      const classes = res.data;
      console.log(classes);
      const classesWithParticipantsAndTotals = classes.map((c) => {
        return { ...c, total: 0, participants: 0 };
      });
      this.setState({ classes: classesWithParticipantsAndTotals });
    });
  }

  render() {
    return (
      <div className="wholeClass">
        <h1 className="classHeading">Our Classes</h1>
        <span>
          <input
            className="search"
            placeholder="search by day of the week"
            type="text"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <button className="searchbutton" onClick={() => this.day()}>
            <img className="searchicon" src={search} alt="search" />
          </button>
        </span>
        <span className="Class-titles">
          <p className="pclass1"> Day</p>
          <p className="pclass2"> Description</p>
          <p className="pclass3"> Participants</p>
          <p className="pclass4"> Price</p>
          <p className="pclass5">Total</p>
        </span>
        <p className="classes">
          {this.state.classes.map((c) => {
            return (
              <div className="class-details" key={c.class_id}>
                <li className="class">
                  <div className="day">{c.day_of_the_week}</div>
                  <div className="description">
                    <p> {c.description}</p>
                  </div>
                  <div className="button-">
                    <button
                      className=" select1"
                      type="button"
                      onClick={() =>
                        c.participants
                          ? this.handleParticipants(c.class_id, -1)
                          : null
                      }
                    >
                      -
                    </button>
                  </div>

                  <p>{c.participants}</p>
                  <div className="button-">
                    <button
                      className=" select2"
                      type="button"
                      onClick={() => this.handleParticipants(c.class_id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>{c.price}</p>
                  <p>{c.total}</p>
                  <div className="buttonbook">
                    <button
                      className="book"
                      type="button"
                      onClick={() => this.handleBooking(c.class_id)}
                    >
                      BOOK
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
        </p>
      </div>
    );
  }
}
