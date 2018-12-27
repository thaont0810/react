import React, { Component } from "react";
import axios from "axios";
import { API_DOG_IMAGES, API_DOG_BREED } from "./config/api.js";


class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      loading: false,
    };
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        limit: this.state.limit + 10,
        loading: false
      });
    }, 1000);
  }

  componentDidMount() {
    this.refs.scroll.addEventListener("scroll", () => {
      if (
        this.refs.scroll.scrollTop + this.refs.scroll.clientHeight >=
        this.refs.scroll.scrollHeight
      ) {
        this.onLoadMore();
      }
    });
  }
  

  handleDetail() {
    console.log(2);
    
  }

  render() {
    const { predictation } = this.props;
    console.log(predictation);
    const { loading } = this.state;

    const dogItem = predictation.slice(0, this.state.limit).map(item => (
      <li 
        className="dog-item" 
        key={item.id} 
        onClick = {this.handleDetail.bind(this)}
        >
        <p className="dog-name">{item.name}</p>
        <p className="dog-id">{item.id}</p>
      </li>
    ));
    return (
      <div>
        <div className="dog-container" ref="scroll">
          <ul className="dog-list">{dogItem}</ul>
        </div>
        {loading ? <p className="loadmore">loading more</p> : ""}
        {/* <a 
         className ='loadmore'
         href="#" 
         onClick={this.onLoadMore}>
        Load
        </a> */}
      </div>
    );
  }
}

export default Suggestions;
