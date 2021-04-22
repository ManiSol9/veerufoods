import React, { useState, Component } from "react";
import { Link } from 'react-router-dom';

class Header extends Component {
  state = { active: true };

  render() {
    console.log(this.props.page);
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="header"
      >
        <div className="container-fluid">
          <a className="navbar-brand logo-name" href="#">
            VEERENDARA FOODS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={this.props.page == "main" ? "nav-link active" : "nav-link"} aria-current="page" to={"/#"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={this.props.page == "stocks" ? "nav-link active" : "nav-link"} aria-current="page" to={"/stocks"}>
                  Stock
                </Link>
              </li>
              <li className="nav-item">
                <Link className={this.props.page == "dailyupdates" ? "nav-link active" : "nav-link"} aria-current="page" to={"/dailyupdates"}>
                  Daily Usage
                </Link>
              </li>
              <li className="nav-item">
                <Link className={this.props.page == "delars" ? "nav-link active" : "nav-link"} aria-current="page" to={"/delars"}>
                  Delars
                </Link>
              </li>
              <li className="nav-item">
                <Link className={this.props.page == "" ? "nav-link" : "nav-link"} aria-current="page" to={"/logout"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
