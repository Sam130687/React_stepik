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

  handledSomething = () => {
    console.log('Pressed');
  }

  render () {
    return (
      <div className="App">
        {this.state.posts.map(post => (
          <h2 key={post.id}>{post.name}</h2>
        ))}
        {//альтернативный вызов 
        }
        <Posts posts={this.state.posts} cb={this.handledSomething}/>
      </div>
  );
  }
}

export default App;