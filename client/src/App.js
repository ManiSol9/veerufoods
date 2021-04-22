import React, { Component, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main/main";
import DailyData from "./components/dailystock/dailydata";
import Stocks from "./components/stock/stocks";
import Dealers from "./components/dealer/dealers";
import "./App.css";

// class App extends Component {

//   render() {
//     return (
//       <div>
//         {/* <Router>
//           <Switch>
//             <Route exact path="/" component={Main} />
//             <Route exact path="/stocks" component={Stocks} />
//             <Route exact path="/delars" component={Dealers} />
//             <Route exact path="/dailyupdates" component={DailyData} />
//           </Switch>
//         </Router> */}
//         qwerty
//       </div>
//     );
//   }
// }
// export default App;

const App = () => {
  const [color, setColor] = useState("green");

  const changeColor = () => {
    setColor(color == "green" ? "red" : "green");
  };

  return (
    <div>
      <Text color={color} />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

const Text = ({ color }) => {
  return(
    <div>
      <h1 style={{ color: `${color}` }}>Hi, {color} Manikanta</h1>
      <FirstChild color={color}/>
    </div>
  );
};

const FirstChild = ({ color }) => {
  return <h1>You selected color: {color}</h1>;
};

export default App;
