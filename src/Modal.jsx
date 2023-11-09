import React from "react";

const Modal = () => {
  return (
    <div className="modal">
      <div>
        <div className="modalHeader">
          <h3>Back this project</h3>
          <button>X</button>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
      <div>
        <div>
          <input type="checkbox"></input>
          <h4>Pledge with no reward</h4>
        </div>
        <p>
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via email.
        </p>
      </div>
      <div>
        <div>
          <input type="checkbox"></input>
          <h4>Bamboo Stand</h4>
          <p>Pledge $25 or more</p>
        </div>
        <div>101 left</div>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </p>
        <div>
          <p>Enter your pledge</p>
          <div>
            <input type="text"></input>
            <button>Continue</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <input type="checkbox"></input>
          <h4>Black Edition Stand</h4>
          <p>Pledge $75 or more</p>
        </div>
        <div>64 left</div>
        <p>
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
      <div>
        <div>
          <input type="checkbox"></input>
          <h4>Mahogany Special Edition Stand</h4>
          <p>Pledge $200 or more</p>
        </div>
        <div>101 left</div>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You'll be added to our Backer member list.
          Shipping is included.
        </p>
      </div>
    </div>
  );
};

export default Modal;
