import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };

  onChangeHandler = event => {
    this.setState({ term: event.target.value });
  };

  onFormSumbit = event => {
    event.preventDefault();
    //call back from
    console.log(this.state.term);
    this.props.onFormSumbit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSumbit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChangeHandler}
              placeholder="Enter The Search Term"
            />
            <div>{this.state.term}</div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
