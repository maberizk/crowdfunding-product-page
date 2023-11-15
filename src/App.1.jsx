import { useState } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import BackingDetails from "./BackingDetails";
import About from "./About";

export function App() {
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

  return (
    <>
      {/* <div className={`overlay ${isSuccessModalOpen ? "open" : ""}`}>
              {isSuccessModalOpen && <SuccessModal />} */}
      {/* {isSuccessModalOpen && <div className="overlay open"></div>} */}
      {/* </div> */}
      <div className="app">
        <div className="overlay"></div>
        <div className="heroImg"></div>
        <Navbar />
        <Intro
          handleBackProject={handleBackProject}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          handleContinue={handleContinue}
        />
        <BackingDetails />
        <About
          handleBackProject={handleBackProject}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          handleContinue={handleContinue}
        />
        {/* <SuccessModal /> */}
      </div>
    </>
  );
}
