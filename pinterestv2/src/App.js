import React from 'react';
import './App.css';
import MultiPinsView from "./Components/PinView/MultiPinsView";
import SinglePinView from "./Components/Pin/SinglePinView";
import {NavBar} from "./Components/NavBar/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {FetchBoards} from "./Components/PinBuilder/FetchBoards";
import {BoardBuilder} from "./Components/BoardBuilder/BoardBuilder";




function App() {
  return (
        <div className="App">
            <Router>
                <NavBar />
                    <Route exact path={"/"} component={MultiPinsView}></Route>
                    <Route exact path={"/pins/:id"} component={SinglePinView}></Route>
                    <Route exact path={"/pin-builder/"} component={FetchBoards}></Route>
                    <Route exact path={"/create-board/"} component={BoardBuilder}></Route>
            </Router>
        </div>
        )
}
export default App;