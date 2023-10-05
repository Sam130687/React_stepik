import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCounting: false,
    };
  }

  componentDidMount() {
    if (this.state.count == 0){
      if (localStorage.count) {
        this.setState({count: localStorage.count*1});
      }
    };
  }

  componentDidUpdate() {
    localStorage.count = this.state.count;
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerId);
  }

  handleStart = () => {
    this.timerId = setInterval(() => {
      this.setState({count: this.state.count + 1, isCounting: true});
    }, 1000);
  }

  handleReset = () => {
    clearInterval(this.timerId);
    this.setState({count: 0, isCounting: false});
  }

  handleStop = () => {
    clearInterval(this.timerId);
    this.setState({isCounting: false});
  }

  render () {
    return (
      <div className="App">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
            <button onClick={this.handleStart}>Start</button>
        ) : (
            <button onClick={this.handleStop}>Stop</button>
        )}
        <button onClick={this.handleReset}>Reset</button>
      </div>
  );
  }
}

export default App;