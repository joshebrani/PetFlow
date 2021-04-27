import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          {/* <Link to={"/pet"}>Pet Items</Link> */}
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
      <>
        <div className="signup-nav">
          <Link to={"/signup"}>Signup</Link>
        </div>
        <div className="login-nav">
          <Link to={"/login"}>Login</Link>
        </div>
      </>
      );
    }
  }

  render() {
    return (
      <div className = "entire-nav">
        <div className = "nav-title">
          <a href="#/"><h1>PetFlow</h1></a>
              {this.getLinks()}
           
        </div>
      </div>
    );
  }
}

export default NavBar;
