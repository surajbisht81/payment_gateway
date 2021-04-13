import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Router>
          <div className="App">
              <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/About">
                    <About />
                </Route>
                <Route exact path="/Contact">
                    <ContactUs />
                </Route>
              </Switch>
          </div>
    </Router>
  );
}

export default App;
