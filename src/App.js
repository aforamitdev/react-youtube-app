import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import Youtube from "./components/Youtube";
import VideoList from "./components/VideoList";

import VideoDetail from "./components/VideoDetail";
class App extends Component {
  state = {
    data: [],
    SelectedVideo: null
  };
  componentDidMount() {
    this.onTermSumbit("React.js");
  }
  onTermSumbit = async got => {
    console.log(got);
    const response = await Youtube.get("/search", {
      params: {
        q: got
      }
    });
    this.setState({
      data: response.data.items,
      SelectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ SelectedVideo: video });
  };

  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSumbit={this.onTermSumbit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {" "}
              <VideoDetail video={this.state.SelectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.data}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
