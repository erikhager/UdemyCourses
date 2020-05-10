import React, { Fragment } from "react";
import "./components/layout/Landing.js";
import "./components/layout/Navbar.js";
import "./App.css";
import { Navbar } from "./components/layout/Navbar.js";
import { Landing } from "./components/layout/Landing.js";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
    </Fragment>
  );
}

export default App;
