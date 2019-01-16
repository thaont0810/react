import React, { Component } from "react";

class Font extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontVariant: ""
    };
  }

  handleChangeVariant = e => {
    this.setState({
      fontVariant: e.target.value
    });
  };

  componentWillMount() {
    const { sourceFile, font } = this.props;
    var css = `@font-face {
        font-family: ${font.family};
        font-style: normal;
        font-weight: 400;
        src:   url(${sourceFile.regular}) format('woff2');
      }`;
    const style = document.createElement("style");

    style.type = "text/css";
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    document.head.appendChild(style);
  }

  render() {
    const { font } = this.props;
    const { fontVariant } = this.state;

    return (
      <li className="item">
        <section>
          <a href="" className="preview-header">
            <h1>{font.family}</h1>
          </a>
          <div className="preview-control">
            <select
              className="preview-variants"
              value={fontVariant}
              onChange={this.handleChangeVariant}
            >
              {font.variants &&
                font.variants.map((variant, i) => (
                  <option value={variant} key={i} className="">
                    {variant}
                  </option>
                ))}
            </select>
          </div>
          <p
            className="content"
            style={{ fontFamily: font.family }}
            // fontWeight: { fontVariant }
          >
            Almost before we knew it, we had left the ground.
          </p>
        </section>
      </li>
    );
  }
}

export default Font;
