import React from "react";

const PrevBtn = props => {
  return (
    <div className="backArrow arrow prevBtn" onClick={props.prevSlide}>
      Prev
    </div>
  );
};

export default PrevBtn;
