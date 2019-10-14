import React, { Component} from 'react';
import './App.css';

import Post from './components/Post';

class App extends Component {

  constructor(props) {
    super(props);
    this.mock = ["oi, tudo bem?", "eai"];
  }


  render() {
    return (
      <div className="App">
        <Post posts={this.mock} />
      </div>
    );
  } 
}

export default App;
