import React, { Component } from "react";
// import "./suggestion.css";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10
    }
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      limit: this.state.limit + 10
    })
  }

  render() {
    const { predictation } = this.props;
    // console.log(predictation);

    const dogItem = predictation.slice(0, this.state.limit).map(item => (
      <li className="dog-item" key={item.id}>
        <p className="dog-name">{item.breeds[0].name}</p>
        <img className="dog-img" src={item.url} alt={item.breeds[0].name} />
      </li>
    ));
    return (
      <div>
        <ul className="dog-list">{dogItem}</ul>
        <a 
         className ='loadmore'
         href="#" 
         onClick={this.onLoadMore}>
        Load</a>
      </div>
    );
  }
}

export default Suggestions;
