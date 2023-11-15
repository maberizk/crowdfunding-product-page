import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import BackingDetails from "./BackingDetails";
import About from "./About";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBackProject = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="app">
      <div className="overlay"></div>
      <div className="heroImg"></div>
      <Navbar />
      <Intro
        handleBackProject={handleBackProject}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
      <BackingDetails />
      <About
        handleBackProject={handleBackProject}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </div>
  );
}

export default App;
