import React, { Component } from 'react';
import './App.css';

import Post from './components/Post';
import Header from "./components/common/Header";
import Container from "./components/common/Container";

class App extends Component {

  constructor(props) {
    super(props);
    this.mock = ["oi, tudo bem?", "eai"];
  }


  render() {
    return (
      <div className="App">
        
          <div style={{ backgroundColor: "#e3e1e1" }}>
            <Header />
            <Post posts={this.mock} />
          </div>
      </div>
    );
  }
}

export default App;
