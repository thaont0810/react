import React, { Component } from "react";
import axios from "axios";
import { API_DOG_IMAGES } from "./config/api.js";
import Detail from "./Detail";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      loading: false,
      dogList: [],
      selected: []
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
    // const selected = id;
    let dog = this.getDog(id);
    this.setState({
      selected: dog
    });
  }

  render() {
    // console.log(this.state);
    const { predictation } = this.props;
    const { loading, selected} = this.state;

    const dogItem = predictation.slice(0, this.state.limit).map(item => (
      <li
        className="dog-item"
        key={item.id}
        onClick={this.handleDetail.bind(this, item.id)}
      >
        <p className="dog-name">{item.name}</p>
        {/* <p className="dog-id">{item.id}</p> */}
      </li>
    ));
    return (
      <div>
        {/* <Detail selected={selected} /> */}
        {
          <div className="detail-item">
           
            <p className="detail-name">
              {selected.length > 0 &&
                selected[0].breeds[0].name}
            </p>
             {selected[0] && selected[0].url && (
              <img
                className="detail-img"
                src={selected[0].url}
                alt={selected[0].breeds[0].name}
              />
            )}
          </div>
        }

        <div className="dog-container" ref="scroll">
          <ul className="dog-list">{dogItem}</ul>
        </div>
        {loading ? <p className="loadmore">loading more</p> : ""}
      </div>
    );
  }
}

export default Suggestions;
