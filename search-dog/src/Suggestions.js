import React, { Component } from "react";
// import "./suggestion.css";

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      loading: false
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

  render() {
    const { predictation } = this.props;
    // console.log(predictation);
    const { loading } = this.state;

    const dogItem = predictation.slice(0, this.state.limit).map(item => (
      <li className="dog-item" key={item.id}>
        <p className="dog-name">{item.breeds[0].name}</p>
        <img className="dog-img" src={item.url} alt={item.breeds[0].name} />
      </li>
    ));
    return (
      <div>
        <div ref="scroll" style={{ height: "500px", overflow: "auto" }}>
          <ul className="dog-list">{dogItem}</ul>
        </div>
        {loading ? <p className='loadmore'>loading more</p> : ""}
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
