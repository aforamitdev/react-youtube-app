import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./components/Youtube";
class App extends Component {
  onTermSumbit = term => {};
  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSumbit={this.onTermSumbit} />
      </div>
    );
  }
}

export default App;
