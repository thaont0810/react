import React from "react";

const BoilingVerdict = props => {
  if (props.cel >= 100) {
    return <p>The water would boil</p>;
  } else if (props.cel <0) {
    return <p>Frozen</p>
  }
  return null;
};

export default BoilingVerdict;
