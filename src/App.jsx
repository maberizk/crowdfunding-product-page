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

  const [totalDonations, setTotalDonations] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [itemQuantities, setItemQuantities] = useState({
    "Bamboo Stand": 101,
    "Black Edition Stand": 64,
    "Mahogany Special Edition Stand": 0,
  });

  const handleDonation = (amount, item) => {
    console.log(`Donating ${amount} to ${item}`);
    setTotalDonations((prevTotal) => prevTotal + amount);
    setTotalBackers((prevTotal) => prevTotal + 1);
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] - 1,
    }));
  };

  const handleBackProject = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleContinue = () => {
    setModalOpen(false);
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
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
        <BackingDetails
          totalDonations={totalDonations}
          totalBackers={totalBackers}
        />
        <About
          handleBackProject={handleBackProject}
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          handleContinue={handleContinue}
          closeSuccessModal={closeSuccessModal}
          handleDonation={handleDonation}
          itemQuantities={itemQuantities}
        />
      </div>
    </>
  );
}

export default App;
