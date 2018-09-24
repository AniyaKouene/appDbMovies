import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import VideoDetails from "../components/VideoDetails";
import VideoList from "./VideoList";
import axios from "axios";

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const API_KEY = "api_key=c1d3ef51f0aeffc42fc943f999ba13b5";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { moviesList: {}, currentMovie: {} };
  }
  componentWillMount() {
    this.initMovies();
  }

  initMovies() {
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(
      function(res) {
        this.setState({
          moviesList: res.data.results.slice(1, 6),
          currentMovie: res.data.results[0]
        });
      }.bind(this)
    );
  }
  render() {
    const renderVideoList = () => {
      if (this.state.moviesList.length >= 5) {
        return <VideoList moviesList={this.state.moviesList} />;
      }
    };
    return (
      <div>
        <SearchBar />
        {renderVideoList()}
        <VideoDetails
          title={this.state.currentMovie.title}
          description={this.state.currentMovie.overview}
        />
      </div>
    );
  }
}

export default App;
