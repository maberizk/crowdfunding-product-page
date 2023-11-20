import React from "react";
import Modal from "./Modal";

const About = ({
  handleBackProject,
  closeModal,
  isModalOpen,
  handleContinue,
  handleDonation,
  itemQuantities,
}) => {
  return (
    <>
      <div className={`overlay ${isModalOpen ? "open" : ""}`}></div>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          handleContinue={handleContinue}
          handleDonation={handleDonation}
          itemQuantities={itemQuantities}
        />
      )}
      <div className="AboutSection">
        <h3 className="aboutTitle">About this project </h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand. <br></br>
          <br></br>Featuring artisan craftsmanship, the simplicity of design
          creates extra desk space below your computer to allow notepads, pens,
          and USB sticks to be stored under the stand.
        </p>
        <div className="donationOptions">
          <div className="donationHeader">
            <h3>Bamboo Stand</h3>
            <button className="pledgeBtn">Pledge $25 or more</button>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you'll be added to a special
            Backer member list.
          </p>
          <div className="donationHeader padding">
            <div className="quantityLeft">
              <h1 className="numberPadding">
                {" "}
                {itemQuantities && itemQuantities["Bamboo Stand"]}
              </h1>
              <p>left</p>
            </div>
            <button
              className="BackProjectBtn select"
              onClick={handleBackProject}
            >
              Select Reward
            </button>
          </div>
        </div>
        <div className="donationOptions">
          <div className="donationHeader">
            <h3>Black Edition Stand</h3>
            <button className="pledgeBtn">Pledge $75 or more</button>
          </div>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You'll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className="donationHeader padding">
            <div className="quantityLeft">
              <h1 className="numberPadding">
                {itemQuantities && itemQuantities["Black Edition Stand"]}
              </h1>
              <p>left</p>
            </div>

            <button
              className="BackProjectBtn select"
              onClick={handleBackProject}
            >
              Select Reward
            </button>
          </div>
        </div>
        <div className="donationOptions soldOut">
          <div className="donationHeader">
            <h3>Mahogany Special Edition</h3>
            <button className="pledgeBtn">Pledge $200 or more</button>
          </div>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You'll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className="donationHeader padding">
            <div className="quantityLeft">
              <h1 className="numberPadding">0</h1>
              <p>left</p>
            </div>
            <button className="BackProjectBtn select soldOutBtn">
              Out of Stock
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
