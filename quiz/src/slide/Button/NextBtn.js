import React from "react";

const NextBtn = props => {
  return (
    <div className="nextArrow arrow nextBtn" onClick={props.nextSlide}>
      Next
    </div>
  );
};

export default NextBtn;
