import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import BackingDetails from "./BackingDetails";
import About from "./About";
import Modal from "./Modal";

function App() {
  return (
    <div className="app">
      <div className="heroImg"></div>
      <Navbar />
      <Intro />
      <BackingDetails />
      <About />
      <Modal />
    </div>
  );
}

export default App;
