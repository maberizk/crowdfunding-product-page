import React, { useState } from "react";

const BackingDetails = ({ totalBackers, totalDonations }) => {

  return (
    <div className="backingDetailsAll">
      <div className="backingDetails">
        <div>
          <h1>{totalDonations}</h1>
          <p>of $100,000 backed</p>
        </div>
        <div className="middle">
          <h1>{totalBackers}</h1>
          <p>total backers</p>
        </div>
        <div>
          <h1>56</h1>
          <p>days left</p>
        </div>
      </div>
      <div className="progressBar">
        <div className="progress"> </div>
      </div>
    </div>
  );
};

export default BackingDetails;
