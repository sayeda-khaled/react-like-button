import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
    }

    this.addLike = this.addLike.bind(this);
  }

  addLike() {
    this.setState((state) => ({
      likes: state.likes + 1
    }));
  }

  render() {
    return <button onClick={this.addLike}>{this.state.likes} {this.state.likes === 1 ? 'like' : 'likes'}</button>
  }
}

export default App;
