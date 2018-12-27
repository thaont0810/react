import React, { Component } from "react";

class Detail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="detail-item">
        <p className="detail-name">name</p>
        <p className="detail-cat">cat</p>
        <p className="detail-id">id</p>
        <img className="detail-img" src="" alt="dd" />
      </div>
    );
  }
}

export default Detail;
