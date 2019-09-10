import React, { Component } from 'react';


class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    }
  }

  tick = () => {
    let counter = 0;
    return function () {
      return counter++;
    }
  };

  stopTimer = (interval) => {
    clearInterval(interval);
    this.setState({ time: 0 });
  };

  componentDidMount() {
    const timer = this.tick();
    let interval = setInterval(() => {
      this.state.time !== 0 ? this.setState({ time: timer() }) : this.stopTimer(interval);
    }, 1000);
  }

  render() {
    return (
      <div>
        { this.state.time }
      </div>
    )
  }
}

export default Timer;