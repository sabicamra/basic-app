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

  removeCharacter = index => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}
export default App;
