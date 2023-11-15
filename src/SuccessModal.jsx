import React from "react";

const SuccessModal = ({ closeSuccessModal }) => {
  return (
    <div className="successModal">
      <svg
        className="paddingBottom"
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
          <path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24" />
        </g>
      </svg>
      <h2>Thanks for your support!</h2>
      <p className="successParagraph">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button className="continueBtn" onClick={closeSuccessModal}>
        Got it!
      </button>
    </div>
  );
};

export default SuccessModal;
