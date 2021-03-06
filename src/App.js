import React, { Component } from "react";

import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
          <Title>Friends List</Title>
          <Wrapper/>
      </div>
    
       
    );
  }
}

export default App;
