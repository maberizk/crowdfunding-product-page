import React from "react";

const BackingDetails = () => {
  return (
    <div className="backingDetailsAll">
      <div className="backingDetails">
        <div>
          <h1>$89,914</h1>
          <p>of $100,000 backed</p>
        </div>
        <div className="middle">
          <h1>5,007</h1>
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
