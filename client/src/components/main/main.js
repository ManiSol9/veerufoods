import React, { useState, Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

class Main extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header page="main"/>
        </div>
        <div className="row">
          <div className="body">
              <p>Dashboard</p>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
