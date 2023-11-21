import React, { useState } from "react";

const BackingDetails = ({ totalBackers, totalDonations }) => {
  let totalBackersComma = totalBackers.toLocaleString();
  let totalDonationsFormatted = totalDonations.toLocaleString();
  return (
    <div className="backingDetailsAll">
      <div className="backingDetails">
        <div>
          <h1>${totalDonationsFormatted}</h1>
          <p>of $100,000 backed</p>
        </div>
        <div className="middle">
          <h1>{totalBackersComma}</h1>
          <p>total backers</p>
        </div>
        <div>
          <h1>56</h1>
          <p>days left</p>
        </div>
      </div>
      <div className="progressBar">
        <div
          className="progress"
          style={{ width: `${(totalDonations / 100000) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BackingDetails;
