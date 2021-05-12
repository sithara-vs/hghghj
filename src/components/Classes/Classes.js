
import React from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./Classes.css";
import search from './search.png'

export default class Clasees extends React.Component {
  constructor(props){
    super(props)
  this.state = {
    classes: [],
    search:''
    
    
  };
  
  this.handleSearch = this.handleSearch.bind(this);
  this.day = this.day.bind(this)

  }
  handleSearch(e){
    console.log(e.target)
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  day (){
    console.log("clicked")
  axios.get(`/api/classes/${this.state.search}`).then((res) => {
    const classes = res.data;
    this.setState({ classes });
  });
}

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
        <h1>Our Classes</h1>
        <span>
        <input className="search" placeholder="search by day of the week" type="text" value={this.state.search} onChange={e =>this.setState({ search: e.target.value })}/>
        <button classname="searchbutton" onClick={() => this.day()}>
        <img className="searchicon" src={search} alt="search"/>
        </button>
        </span>
        <span>
          <p> day</p>
          <p> description</p>
          <p> participants</p>
          <p> price</p>
        </span>
        <p className="classes">
          {this.state.classes.map((classes) => {
            return (
              <li className="class">
                <div className="day">{classes.day_of_the_week}</div>
                <div className="description">
                  <p> {classes.description}</p>
                </div>
                <div className="button-">
                  <button className=" select1" type="button" onClick={classes.participants-1}>
                    -
                  </button>
                  
                </div>
                <p>{classes.participants}</p>
                <div className="button-">
                  <button className=" select2" type="button" onClick={classes.participants+1}>
                    +
                  </button>
                </div>
                <p>{classes.price}</p>
                <div className="buttonbook">
                  <button className="book" type="button">
                    BOOK
                  </button>
                </div>
              </li>
            );
          })}
        </p>
      </div>
    );
  }
}
