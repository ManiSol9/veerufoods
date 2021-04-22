import React, { useState, Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import axios from "axios";

class Stocks extends Component {
  state = {
    delarRecords: [],
    showData: false,
    tweight: null,
    gweight: null,
    nweight: null,
    amount: null,
    dealer: "Manikanta",
    rate: null,
  };

  componentDidMount() {
    this.fetchDealers();
  }

  fetchDealers = () => {
    axios
      .get("http://localhost:3008/api/stocks/data", {
        headers: { "Access-Control-Allow-Origin": "http://localhost:3008" },
      })
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  onCreate = (showData) => {
    this.setState({
      showData: !showData,
    });
  };

  saveDealer = () => {
    alert("Details Saved");
  };

  saveDate = (name, val) => {
    if (name === "tweight") {
      this.setState({ tweight: val.target.value });
    } else if (name === "gweight") {
      this.setState({ gweight: val.target.value });
    } else if (name === "price") {
      this.setState({ rate: val.target.value });
    }
  };

  updateNetWeight = () => {
    const { gweight } = this.state;
    let nweight = gweight - gweight * 0.05;
    this.setState({ nweight: nweight });
  };

  updatePrice = () => {
    const { nweight, rate } = this.state;
    this.setState({ amount: nweight * rate });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header page="stocks" />
        </div>
        <div className="row">
          <div className="body col col-lg-12">
            <div className="col-md-auto">
              <div className="body-header">
                <div className="row">
                  <div className="col-lg-6">
                    <p className="body-title">Dealers</p>
                  </div>
                  <div className="col-lg-6 right-button">
                    <button
                      onClick={() => this.onCreate(this.state.showData)}
                      type="button"
                      class="btn btn-primary btn-sm"
                    >
                      Add Stcok
                    </button>
                  </div>
                </div>
              </div>
              {this.state.showData == true ? (
                <div className="main-body">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Delar Name</th>
                        <th scope="col">Date of Import</th>
                        <th scope="col">Total Weight</th>
                        <th scope="col">Net. Weight</th>
                        <th scope="col">Suit (0.05)</th>
                        <th scope="col">Total Net Weight</th>
                        <th scope="col">Rate (Per 1kg)</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Payment Status</th>
                        <th scope="col">Balance</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Manikanta</td>
                        <td>01-03-2021</td>
                        <td>5000</td>
                        <td>3000</td>
                        <td>150</td>
                        <td>2850</td>
                        <td>10</td>
                        <td>28500</td>
                        <td>Patially Paid</td>
                        <td>18500</td>
                        <td>Edit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="row main-body">
                  <div class="row mb-3">
                    <div class="col-lg-4">
                      <label for="exampleFormControlInput1" class="form-label">
                        Select Dealer
                      </label>
                      <div class="col-lg-12">
                        <input
                          type="Name"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="your name"
                          value={this.state.dealer}
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Total Weight (in Kgs)
                      </label>
                      <div class="col-lg-12">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="0"
                          value={this.state.tweight}
                          onChange={(val) => this.saveDate("tweight", val)}
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Gross Weight (in Kgs)
                      </label>
                      <div class="col-lg-12">
                        <input
                          type="number"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="0"
                          value={this.state.gweight}
                          onChange={(val) => this.saveDate("gweight", val)}
                          onBlur={this.updateNetWeight}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div className="col-lg-4">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Suite
                      </label>
                      <div class="col-lg-12">
                        <input
                          type="number"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="phonenumber"
                          value="0.05"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Net Weight
                      </label>
                      <div class="col-lg-12">
                        <input
                          type="number"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="0"
                          value={this.state.nweight}
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Rate
                      </label>
                      <div class="col-lg-12">
                        <input
                          type="number"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="0"
                          value={this.state.rate}
                          onChange={(val) => this.saveDate("price", val)}
                          onBlur={this.updatePrice}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div className="col-lg-4">
                      <label
                        for="exampleFormControlTextarea1"
                        class="form-label"
                      >
                        Amount
                      </label>
                      <div class="col-lg-12">
                        <input
                          type="number"
                          class="form-control"
                          id="exampleFormControlInput1"
                          placeholder="0"
                          value={this.state.amount}
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <button
                      onClick={() => this.saveDealer()}
                      type="button"
                      class="btn btn-primary btn-sm save-button"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Stocks;
