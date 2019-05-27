import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Junior Developer"
      },
      {
        name: "Mac",
        job: "Programming Instructor"
      },
      {
        name: "Dee",
        job: "Project manager"
      },
      {
        name: "Dennis",
        job: "QA"
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <Table characterData={this.state.characters} />
      </div>
    );
  }
}
export default App;
