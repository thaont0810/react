import React, { Component } from "react";

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
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.ref.addEventListener("scroll", e => {
      if (this.ref.scrollTop + this.ref.clientHeight >= this.ref.scrollHeight) {
        this.onLoadMore();
      }
    });
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

  getDogList() {}

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
    // this.getDog(id);
  }

  render() {
    const { predictation, handleSelectBreed } = this.props;
    const { loading } = this.state;

    const dogItem =
      predictation.length > 0 ? (
        predictation.slice(0, this.state.limit).map(item => (
          <li
            className="dog-item"
            key={item.id}
            onClick={() => {handleSelectBreed(item)}}
          >
            <p className="dog-name">{item.name}</p>
            {/* <p className="dog-id">{item.id}</p> */}
          </li>
        ))
      ) : (
        <p>Not Found</p>
      );
    return (
      <div>
        <div ref={e => (this.ref = e)} className="dog-container">
          <div className="dog-list">{dogItem}</div>
        </div>

        {loading ? <p className="loadmore">loading more</p> : ""}
      </div>
    );
  }
}

export default Suggestions;
