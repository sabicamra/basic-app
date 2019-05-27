import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [
      // if you dont want initial state to be empty comment lines below
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

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Form  handleSubmit={this.handleSubmit} />
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}
export default App;
