import React from "react";

const Modal = () => {
  return (
    <div className="modal">
      <div>
        <div className="modalHeader">
          <h3>Back this project</h3>
          <button className="closeModalBtn">
            <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                fill="#000"
                fill-rule="evenodd"
                opacity=".4"
              />
            </svg>
          </button>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
      <div className="donationOptions">
        <div className="pledgeNo">
          <input type="radio" className="radioBtn"></input>
          <h4>Pledge with no reward</h4>
        </div>
        <p className="description">
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
      </div>
      <div className="donationOptions">
        <div className="donationHeader">
          <div className="headerLeft">
            <input type="radio"></input>
            <h4>Bamboo Stand</h4>
            <p className="cyanText">Pledge $25 or more</p>
          </div>
          <p>
            <span className="boldedText">101</span> left
          </p>
        </div>
        <p className="description">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you'll be added to a special
          Backer member list.
        </p>
        <div className="line"></div>
        <div className="pledge">
          <p>Enter your pledge</p>
          <div className="input">
            <input type="text" className="pledgeInput"></input>
            <button className="continueBtn">Continue</button>
          </div>
        </div>
      </div>
      <div className="donationOptions">
        <div className="donationHeader">
          <div className="headerLeft">
            <input type="radio"></input>
            <h4>Black Edition Stand</h4>
            <p className="cyanText">Pledge $75 or more</p>
          </div>
          <p>
            <span className="boldedText">64</span> left
          </p>
        </div>
        <p className="description">
          You get a Black Special Edition computer stand and a personal thank
          you. You'll be added to our Backer member list. Shipping is included.
        </p>
        <div>
          <p>Enter your pledge</p>
          <div>
            <input type="text"></input>
            <button>Continue</button>
          </div>
        </div>
      </div>
      <div className="donationOptions soldOut">
        <div className="donationHeader">
          <div className="headerLeft">
            <input type="radio"></input>
            <h4>Mahogany Special Edition Stand</h4>
            <p className="cyanText">Pledge $200 or more</p>
          </div>
          <p>
            <span className="boldedText">0</span> left
          </p>
        </div>
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
