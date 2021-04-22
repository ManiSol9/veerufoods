import React, { useState, Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

class DailyData extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header page="dailyupdates" />
        </div>
        <div className="row">
          <div className="body">
              <p>Daily Production Data</p>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default DailyData;
