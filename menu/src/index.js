import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import Menu from "./Menu";
import Menu from "./Menu2";

import * as serviceWorker from "./serviceWorker";

const menus = [
  {
    id: 1,
    title: "Home"
  },
  {
    id: 2,
    title: "Products",
    dropdown: [
      {
        id: 1,
        title: "pro-1"
      },
      {
        id: 2,
        title: "pro-2"
      }
    ]
  },
  {
    id: 3,
    title: "Services",
    dropdown: [
      {
        id: 1,
        title: "service-1"
      },
      {
        id: 2,
        title: "service-2"
      }
    ]
  },
  {
    id: 4,
    title: "Contact"
  }
];

ReactDOM.render(<Menu menus={menus} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
