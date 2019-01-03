import React, { Component } from "react";
import "./App.css";
import DogDetail from "./components/DogDetail";
import Search from "./components/Search";
import { API_DOG_IMAGES, API_DOG_BREED } from "./config/api.js";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedList: [],
      breedInfo: [],
      selectedBreed: 0
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  handleSelectBreed = breedId => {
    this.setState({
      selectedBreed: breedId
    });
  };

  fetchBreedList = () => {
    axios
      .get(`${API_DOG_BREED}?limit=100`)
      .then(({ data }) => {
        this.setState({
          breedList: data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchBreedInfo = () => {
    axios
      .get(
        `${API_DOG_IMAGES}?size=med&mime_types=jpg&format=json&has_breeds=true&order=ASC&page=0&limit=100`
      )
      .then(responses => {
        this.setState({
          breedInfo: responses.data
        });
        // console.log("dogList", responses.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchData = () => {
    this.fetchBreedInfo();
    this.fetchBreedList();
  };

  getDogDetail = () => {
    let { selectedBreed, breedInfo } = this.state;
    if (!breedInfo && !selectedBreed) return {};
    let breedDetail = breedInfo.find(item => {
      return item.breeds[0].id === selectedBreed;
    });
    return breedDetail;
  };

  render() {
    let { breedList } = this.state;
    return (
      <div className="App">
        <Search
          breedList={breedList}
          handleSelectBreed={this.handleSelectBreed}
        />
        <DogDetail info={this.getDogDetail()} />
      </div>
    );
  }
}

export default App;
