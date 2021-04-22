import React, { useState, Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

class Dealers extends Component {
  state = { delarRecords: [], showData: true };

  onCreate = (showData) => {
    this.setState({
      showData: !showData,
    });
  };

  saveDealer = () => {
    alert("Details Saved")
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header page="delars" />
        </div>
        <div className="row">
          <div className="body col col-lg-10">
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
                        <th scope="col">Name</th>
                        <th scope="col">Phonenumber</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Manikanta</td>
                        <td>9666509290</td>
                        <td>vcmanikanta@hotmail.com</td>
                        <td>Ongole</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Manikanta</td>
                        <td>9666509290</td>
                        <td>vcmanikanta@hotmail.com</td>
                        <td>Ongole</td>
                        <td>Edit</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Manikanta</td>
                        <td>9666509290</td>
                        <td>vcmanikanta@hotmail.com</td>
                        <td>Ongole</td>
                        <td>Edit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="main-body">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Dealer Name
                    </label>
                    <div class="col-lg-4">
                      <input
                        type="Name"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="your name"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Dealer Email
                    </label>
                    <div class="col-lg-4">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Dealer City
                    </label>
                    <div class="col-lg-4">
                      <input
                        type="city"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="cityname"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Dealer Phone
                    </label>
                    <div class="col-lg-4">
                      <input
                        type="number"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="phonenumber"
                      />
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

export default Dealers;
