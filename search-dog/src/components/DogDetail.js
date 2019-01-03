import React, { Component } from "react";

class DogDetail extends Component { 
  render() {
    const { info } = this.props;
    return (
      <div className="detail-item">
        <p className="detail-name">{info.name}</p>
        <p className="detail-cat">{info.categories}</p>
        <p className="detail-id">{info.id}</p>
        {info.url && <img className="detail-img" src={info.url} alt="" />}
      </div>
    );
  }
}

DogDetail.defaultProps = {
  info : {}
}
export default DogDetail;
