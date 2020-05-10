import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/layout/Navbar.js";
import { Landing } from "./components/layout/Landing.js";
import { Register } from "./components/auth/Register";
import { Login } from "./components/auth/Login";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/Login' component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
