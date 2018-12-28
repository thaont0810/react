import React, { Component } from "react";
import axios from "axios";
import { API_DOG_IMAGES } from "./config/api.js";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      loading: false,
      dogList: [],
      selected: ""
      // suggestions: this.props.predictation
    };
    this.onLoadMore = this.onLoadMore.bind(this);
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
    this.getDogList();
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

  getDogList() {
    axios
      .get(
        `${API_DOG_IMAGES}?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=0&limit=100`
      )
      .then(responses => {
        // console.log('a',responses)
        this.setState({
          dogList: responses.data
        });
        // console.log("dogList", responses.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getDog(id) {
    let d = this.state.dogList.filter(item => item.breeds[0].id === id);
    return d;
  }

  handleDetail(id) {
    const selected = id;
    this.setState = {
      selected: id
    };
    // console.log(this.setState.selected);
    let dog = this.getDog(id);
    return (
      <div className="detail-item">
        <p className="detail-name">dog[0].name</p>
        {/* <p className="detail-cat">{dog[0].categories}</p>
        <p className="detail-id">{dog[0].id}</p>
        <img 
          className="detail-img" 
          src= {dog[0].url}
          alt= {dog[0].breeds[0].name}
           /> */}
      </div>
    );
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
