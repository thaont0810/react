import React, { Component } from "react";
import Font from "./Font";

class ListFont extends Component {
  // changeFontFamily = () => {
  //   this.setState({
  //     fontFamily
  //   })
  // }

  render() {
    const { listFont } = this.props;
    const style = {
      fontFamily: "",
      fontWeight: `url()`
    };

    return (
      <ul className="list">
        {listFont &&
          listFont.map((font, i) => (
            <Font key={i} font={font} sourceFile={font.files} />
          ))}
      </ul>
    );
  }
}

export default ListFont;
