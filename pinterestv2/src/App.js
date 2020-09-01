import React from "react";
import "./App.css";
import MultiPinsView from "./Components/PinView/MultiPinsView";
import SinglePinView from "./Components/Pin/SinglePinView";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BoardForm } from "./Components/BoardBuilder/BoardForm";
import { PinForm } from "./Components/PinBuilder/PinForm";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path={"/"} component={MultiPinsView}></Route>
        <Route exact path={"/pins/:id"} component={SinglePinView}></Route>
        <Route exact path={"/pin-builder/"} component={PinForm}></Route>
        <Route exact path={"/pin-builder/edit/:id"} component={PinForm}></Route>
        <Route exact path={"/create-board/"} component={BoardForm}></Route>
      </Router>
    </div>
  );
}
export default App;
