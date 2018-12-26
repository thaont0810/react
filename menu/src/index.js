import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import Menu from "./Menu";
import Menu from "./Menu2";

import * as serviceWorker from "./serviceWorker";

const menus = [
  {
    title: "Home"
  },
  {
    title: "Products",
    dropdown: [
      {
        title: "pro-1"
      },
      {
        title: "pro-2"
      }
    ]
  },
  {
    title: "Services",
    dropdown: [
      {
        title: "service-1"
      },
      {
        title: "service-2"
      }
    ]
  },
  {
    title: "Contact"
  }
];

ReactDOM.render(<Menu menus={menus} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
