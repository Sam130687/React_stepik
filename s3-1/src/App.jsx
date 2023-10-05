import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      someKey: false
    };

    this.handleIncClick = this.handleIncClick.bind(this);
  }

  handleIncClick() {
    this.setState({count: this.state.count + 1});

    //this.setState((prevState) => ({count: prevState.count + 1}));
    //сделает то же самое но если вызвать несколько раз изменяет каждый раз а не один раз на функцию
  }

  handleDecClick = () => {
    this.setState({count: this.state.count - 1});
  }

  render () {
    return (
      <div className="App" style={{margin: 'auto', width: '300px'}}>
          <button onClick={this.handleDecClick}>-</button>
          <span style={countStyle}>{this.state.count}</span>
          <button onClick={this.handleIncClick}>+</button>
      </div>
  );
  }
}

export default App;

const countStyle = {margin: '0 0.75rem', display: 'inline-block'}
