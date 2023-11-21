import React, { useState, useRef } from "react";

const Modal = ({
  closeModal,
  handleContinue,
  handleDonation,
  itemQuantities,
}) => {
  const noPledgeInputRef = useRef();
  const bambooStandInputRef = useRef();
  const blackEditionStandInputRef = useRef();
  const [openDropdown, setOpenDropdown] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioClick = (pledge) => {
    setOpenDropdown(openDropdown === pledge ? null : pledge);
    setSelectedOption(pledge);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modalHeader">
          <h3 className="backHeader">Back this project</h3>
          <button onClick={closeModal} className="closeModalBtn">
            <svg
              width="15"
              height="15"
              className="closeIcon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
      <div
        className={`donationOptions ${
          selectedOption === "no pledge" ? "selected" : ""
        }`}
      >
        <div className="pledgeNo">
          <input
            type="radio"
            className="radioBtn"
            name="pledge"
            onClick={() => handleRadioClick("no pledge")}
          ></input>
          <h4>Pledge with no reward</h4>
        </div>
        <p className="description">
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
        <div
          className={`pledgeDropdown ${
            openDropdown === "no pledge" ? "open" : ""
          }`}
        >
          <div className="line"></div>
          <div className="pledge">
            <p>Enter your pledge</p>
            <div className="input">
              <input
                type="text"
                placeholder="$25"
                className="pledgeInput"
                ref={noPledgeInputRef}
              ></input>
              <button
                onClick={() => {
                  let amount;
                  switch (selectedOption) {
                    case "no pledge":
                      amount = parseInt(noPledgeInputRef.current.value);
                      break;
                    case "Bamboo Stand":
                      amount = parseInt(bambooStandInputRef.current.value);
                      break;
                    case "Black Edition Stand":
                      amount = parseInt(
                        blackEditionStandInputRef.current.value
                      );
                      break;
                    default:
                      amount = 0;
                  }
                  handleDonation(amount, selectedOption);
                  handleContinue();
                }}
                className="continueBtn"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`donationOptions ${
          selectedOption === "Bamboo Stand" ? "selected" : ""
        }`}
      >
        {/* <div className="donationHeader"> */}
        <div className="headerLeft">
          <input
            type="radio"
            onClick={() => handleRadioClick("Bamboo Stand")}
            name="pledge"
          ></input>
          <div className="donationDeets">
            <h4>Bamboo Stand</h4>
            <p className="cyanText">Pledge $25 or more</p>
          </div>
        </div>
        <p className="quantityLeftModal">
          <span className="boldedText">
            {itemQuantities && itemQuantities["Bamboo Stand"]}
            <span> </span>
          </span>
          left
        </p>
        {/* </div> */}
        <p className="description">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <div
          className={`pledgeDropdown ${
            openDropdown === "Bamboo Stand" ? "open" : ""
          }`}
        >
          <div className="line"></div>
          <div className="pledge">
            <p>Enter your pledge</p>
            <div className="input">
              <input
                type="text"
                placeholder="$25"
                className="pledgeInput"
                ref={bambooStandInputRef}
              ></input>
              <button
                onClick={() => {
                  let amount;
                  switch (selectedOption) {
                    case "no pledge":
                      amount = parseInt(noPledgeInputRef.current.value);
                      break;
                    case "Bamboo Stand":
                      amount = parseInt(bambooStandInputRef.current.value);
                      break;
                    case "Black Edition Stand":
                      amount = parseInt(
                        blackEditionStandInputRef.current.value
                      );
                      break;
                    default:
                      amount = 0;
                  }
                  handleDonation(amount, selectedOption);
                  handleContinue();
                }}
                className="continueBtn"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`donationOptions ${
          selectedOption === "Black Edition Stand" ? "selected" : ""
        }`}
      >
        {/* <div className="donationHeader">  */}
        <div className="headerLeft">
          <input
            type="radio"
            name="pledge"
            onClick={() => handleRadioClick("Black Edition Stand")}
          ></input>
          <div className="donationDeets">
            <h4>Black Edition Stand</h4>
            <p className="cyanText">Pledge $75 or more</p>
          </div>
        </div>
        <p className="quantityLeftModal">
          <span className="boldedText">
            {itemQuantities && itemQuantities["Black Edition Stand"]}
          </span>
          <span> </span>
          left
        </p>
        {/* </div> */}
        <p className="description">
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <div
          className={`pledgeDropdown ${
            openDropdown === "Black Edition Stand" ? "open" : ""
          }`}
        >
          <div className="line"></div>
          <div className="pledge">
            <p>Enter your pledge</p>
            <div className="input">
              <input
                type="text"
                placeholder="$75"
                className="pledgeInput"
                ref={blackEditionStandInputRef}
              ></input>
              <button
                onClick={() => {
                  let amount;
                  switch (selectedOption) {
                    case "no pledge":
                      amount = parseInt(noPledgeInputRef.current.value);
                      break;
                    case "Bamboo Stand":
                      amount = parseInt(bambooStandInputRef.current.value);
                      break;
                    case "Black Edition Stand":
                      amount = parseInt(
                        blackEditionStandInputRef.current.value
                      );
                      break;
                    default:
                      amount = 0;
                  }
                  handleDonation(amount, selectedOption);
                  handleContinue();
                }}
                className="continueBtn"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="donationOptions soldOut">
        {/* <div className="donationHeader"> */}
        <div className="headerLeft">
          <input type="radio" name="pledge" disabled></input>
          <div className="donationDeets">
            <h4>Mahogany Special Edition Stand</h4>
            <p className="cyanText">Pledge $200 or more</p>
          </div>
        </div>
        <p className="quantityLeftModal">
          <span className="boldedText">0</span> left
        </p>
        {/* </div> */}
        <p className="description">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included.
        </p>
      </div>
    </div>
  );
};

export default Modal;
