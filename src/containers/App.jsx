import React, { Component } from "react";
import Header from "../components/header";
import SearchBar from "../components/SearchBar";
import VideoDetails from "../components/VideoDetails";
import Video from "../components/Video";
import VideoList from "./VideoList";
import axios from "axios";


const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL =
  "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";
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
        this.setState(
          {
            moviesList: res.data.results.slice(1, 6),
            currentMovie: res.data.results[0]
          },
          function() {
            this.applyVideoToCurrentMovie();
          }
        );
      }.bind(this)
    );
  }

  applyVideoToCurrentMovie() {
    axios
      .get(
        `${API_END_POINT}movie/${
          this.state.currentMovie.id
        }?${API_KEY}&append_to_response=videos&include_aldult=false`
      )
      .then(
        function(res) {
          const youtubeKey = res.data.videos.results[0].key;
          let newCurrentMovieState = this.state.currentMovie;
          newCurrentMovieState.videoId = youtubeKey;
          this.setState({ currentMovie: newCurrentMovieState });
        }.bind(this)
      );
  }

  onClickListItem(movie) {
    this.setState({ currentMovie: movie }, function() {
      this.applyVideoToCurrentMovie();
      this.setRecommendation();
    });
  }

  setRecommendation() {
    axios
      .get(
        `${API_END_POINT}movie/${
          this.state.currentMovie.id
        }/recommendations?${API_KEY}&language=fr`
      )
      .then(
        function(res) {
          this.setState({
            moviesList: res.data.results.slice(0, 6)
          });
        }.bind(this)
      );
  }

  onClickSearch(searchText) {
    if (searchText) {
      axios
        .get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`)
        .then(
          function(res) {
            if (res.data && res.data.results[0]) {
              if (res.data.results[0].id !== this.state.currentMovie.id) {
                this.setState({ currentMovie: res.data.results[0] }, () => {
                  this.applyVideoToCurrentMovie();
                  this.setRecommendation();
                });
              }
            }
          }.bind(this)
        );
    }
  }

  render() {
    const renderVideoList = () => {
      if (this.state.moviesList.length >= 5) {
        return (
          <VideoList
            moviesList={this.state.moviesList}
            callback={this.onClickListItem.bind(this)}
          />
        );
      }
    };
    return (
      <div>
           <div className="container-fluid">
    <Header/>
    </div>
      <div className="container">
        <div className="m-5">
          <SearchBar callback={this.onClickSearch.bind(this)} />
        </div>
        <div className="row">
          <div className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId} />
            <VideoDetails
              title={this.state.currentMovie.title}
              description={this.state.currentMovie.overview}
            />
          </div>
          <div className="col-md-4">{renderVideoList()}</div>
        </div>
      </div>
      </div>
 
    );
  }
}

export default App;
