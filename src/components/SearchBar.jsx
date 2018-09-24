import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", 
    placeholder: "Tapez votre film ici..." , 
    intervalBeforerequest: 2000, 
    lockrequest: false};
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-8 input-group">
          <input
            className="form-control"
            onChange={this.handleChange.bind(this)}
            placeholder={this.state.placeholder}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-secondary"
              onClick={this.handleClick.bind(this)}
            >
              Rechercher
            </button>
          </span>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
    if(!this.state.lockrequest){
      this.setState({lockrequest: true})
      setTimeout(function(){this.search()}.bind(this), this.state.intervalBeforerequest)

    }

  }

  handleClick(e) {
    this.search();
  }

  search() {
    this.props.callback(this.state.searchText);
    this.setState({lockrequest: false})
  }
}

export default SearchBar;
