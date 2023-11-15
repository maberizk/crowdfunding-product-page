import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import BackingDetails from "./BackingDetails";
import About from "./About";
import Modal from "./Modal";
import SuccessModal from "./SuccessModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  const handleBackProject = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleContinue = () => {
    console.log("continue clicked");
    setModalOpen(false);
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    console.log("clicked close");
    setSuccessModalOpen(false);
  };

  return (
    <>
      <div className={`overlay ${isSuccessModalOpen ? "open" : ""}`}>
        {isSuccessModalOpen && (
          <SuccessModal closeSuccessModal={closeSuccessModal} />
        )}
        {/* {isSuccessModalOpen && <div className="overlay open"></div>} */}
      </div>
      <div className="app">
        <div className="overlay"></div>
        <div className="heroImg"></div>
        <Navbar />
        <Intro
          handleBackProject={handleBackProject}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          handleContinue={handleContinue}
          closeSuccessModal={closeSuccessModal}
        />
        <BackingDetails />
        <About
          handleBackProject={handleBackProject}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          handleContinue={handleContinue}
          closeSuccessModal={closeSuccessModal} 
        />
      </div>
    </>
  );
}

export default App;
