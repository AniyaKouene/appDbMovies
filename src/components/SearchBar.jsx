import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", 
    placeholder: "Tapez votre film ici..." , 
};
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
  }

  handleClick(e) {
    this.search();
  }

  search() {
    this.props.callback(this.state.searchText);
  }
}

export default SearchBar;
