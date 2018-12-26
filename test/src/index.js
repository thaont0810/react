import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock from "./components/ClockFormat/ClockFormat";

import Content from "./Content";
import Header from "./Header";
import HeaderSearch from "./HeaderSearch";

import Container from "./Container";
import SimpleSearchHolder from "./SimpleSearchHolder";
import SearchFormWithSubmit from "./SearchFormWithSubmit";
import ContentSearch from "./ContentSearch";
// import Timeline from './components/Timeline/Timeline';
import * as serviceWorker from "./serviceWorker";
import Notification from './Notification'
const activityArr = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: "ccc",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "aaaa", text: "Me too!" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch1",
    user: {
      id: 2,
      name: "aaa",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "bbb", text: "Me too!" }]
  },
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 3,
      name: "bbb",
      avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: "ccc", text: "Me too!" }]
  }
];

ReactDOM.render(
  <div className="notificationsFrame">
    <div className="panel">
      <Clock />
      {/* <Header title="Timeline" />  */}
      {/* <Content activities={activityArr} /> */}
      <Notification />
      {/* <Container /> */}
      {/* <ContentSearch /> */}
      {/* <SimpleSearchHolder Component= {HeaderSearch}/> */}
    </div>
  </div>,
  document.getElementById("demo1")
);

// ReactDOM.render(
//   <SimpleSearchHolder Component={SearchFormWithSubmit} />,
//   document.getElementById("searchFormWithSubmit")
// );

ReactDOM.render(
  <SimpleSearchHolder Component={HeaderSearch} />,
  document.getElementById("headerSearch")
);
ReactDOM.render(
  <Clock format = 'h:m:s p' />,
  document.getElementById("clockFormat")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
