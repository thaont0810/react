import React, { Component } from "react";
import axios from "axios";
import { API_DOG_IMAGES } from "./config/api.js";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      loading: false,
      selected: "",
      // suggestions: this.props.predictation
    };
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        limit: this.state.limit + 5,
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
    this.getDetail();
  }

  getListDog() {
    axios
      .get(
        `${API_DOG_IMAGES}?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=0&limit=100`
      )
      .then(responses => {
        // console.log('a',responses)
        this.setState({
          suggestions: responses.data
        });
        // console.log("state", responses.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getDog(id) {
  
  }

  handleDetail(id) {
    // console.log(id);

  }

  render() {
    const { predictation } = this.props;
    // console.log(predictation);
    const { loading } = this.state;

    const dogItem = predictation.slice(0, this.state.limit).map(item => (
      <li
        className="dog-item"
        key={item.id}
        onClick={this.handleDetail.bind(this, item.id)}
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
