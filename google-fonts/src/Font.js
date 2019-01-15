import React, { Component } from "react";

class Font extends Component {
  render() {
    const { listFont } = this.props;

    return (
      <ul className="list">
        {listFont &&
          listFont.map((font, i) => (
            <li key={i} className="item">
              <section>
                <a href="" className="preview-header">
                  <h1>{font.family}</h1>
                </a>
                <div className="preview-control">
                  <select name="" id="" className="preview-variants">
                    {font.variants &&
                      font.variants.map((variant, i) => (
                        <option value="" key={i} className="">
                          {variant}
                        </option>
                      ))}
                  </select>
                </div>
                <p className="content" style={{ fontFamily: "{font.family}" }}>
                  Almost before we knew it, we had left the ground.
                </p>
              </section>
            </li>
          ))}
      </ul>
    );
  }
}

export default Font;
