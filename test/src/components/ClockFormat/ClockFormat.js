import React from "react";
import Hour from "./Hour";
import Minute from "./Minute";
import Second from "./Second";
import Separator from "./Separator";
import Ampm from "./Ampm";

const Clock = (props) => {
  let children = props.format.split("").map((e, index) => {
    if (e === "h") {
      return <Hour key={index} {...props} />;
    } else if (e === "m") {
      return <Minute key={index} {...props} />;
    } else if (e === "s") {
      return <Second key={index} {...props} />;
    } else if (e === "p") {
      return <Ampm key={index} {...props} />;
    } else if (e === " ") {
      return <span key={index}> </span>;
    } else {
      return <Separator key={index} {...props} />;
    }
  });

  return <span>{children}</span>
};

export default Clock;
