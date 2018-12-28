import React, { Component } from "react";

class Detail extends Component {
  render() {
    const { selected } = this.props;
    return (
      <div className="detail-item">
        <p className="detail-name">
          {selected.length > 0 && selected[0].breeds[0].name}
        </p>
        <p className="detail-cat">
          {selected.length > 0 && selected[0].breeds[0].categories}
        </p>
        <p className="detail-id">{selected.length > 0 && selected[0].id}</p>
        <img
          className="detail-img"
          src={selected.length > 0 && selected[0].url }
          alt=""
        />
      </div>
    );
  }
}

export default Detail;
