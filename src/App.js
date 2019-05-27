import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  render() {
    const characters = [
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
    ];

    return (
      <div className="App">
        <Table characterData={characters} />
      </div>
    );
  }
}
export default App;
