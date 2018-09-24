import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "", placeholder: "Tapez votre film ici..." };
  }
  render() {
    return (
      <div className="row">
      <div className="col-sm-8">
      <input className="form-control"
          onChange={this.handleChange.bind(this)}
          placeholder={this.state.placeholder}
        />
      </div>
       
      </div>
    );
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }
}

export default SearchBar;
