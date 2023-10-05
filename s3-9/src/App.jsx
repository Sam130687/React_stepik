import React, {Component} from 'react'
import { Posts } from './components/Posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {id: 'abc1', name: 'JS Basics'},
        {id: 'abc2', name: 'JS Advanced'},
        {id: 'abc3', name: 'React JS'},
      ],
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  removePost = (id) => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== id)
    });
  }

  render () {
    return (
      <div className="App">
        <Posts posts={this.state.posts} removePost={this.removePost}/>
      </div>
  );
  }
}

export default App;