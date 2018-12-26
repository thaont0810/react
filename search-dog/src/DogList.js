import React, { Component } from "react";
import ReactDom from "react-dom";

class DogList extends Component {
  render() {
    const { doglist } = this.props;
    // console.log(doglist);

    return (
      <div className="dog-list">
        {doglist &&
          doglist.map(dog => {
            const { breeds, categories, id, url } = dog;
            if (breeds.length > 0) {
              return (
                <div className="dog-item">
                  <p className="dog-name">{breeds[0].name}</p>
                  {/* <p className="dog-cat">{categories}</p>
                  <p className="dog-id">{id}</p> */}
                  <img className="dog-img" src={url} alt={breeds[0].name} />
                  <hr />
                </div>
              );
            }
          })}
      </div>
    );
  }
}
export default DogList;
