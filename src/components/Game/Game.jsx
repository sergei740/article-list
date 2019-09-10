import React, { Component } from 'react';
import style from './style.module.css';
import PlayerSquare from '../PlayerSquare/PayerSuare';
import RandomSquare from '../RandomSquare/RandomSquare';
import getRandomNumb from '../../getRandomNumb';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60,
      points: 0,
      marginTop: getRandomNumb(),
      marginLeft: getRandomNumb(),
      random: {
        marginTop: getRandomNumb(),
        marginLeft: getRandomNumb()
      }
    }
  }

  mainFunction = () => {
    if (this.state.time !== 0) {
      this.timer();
      this.comparePosition();
      setTimeout(this.mainFunction, 1000);
    } else {
      clearTimeout(setTimeout(this.mainFunction, 1000));
    }
  };

  timer = () => {
    const newTime = this.state.time !== 0 ? this.setState({ time: this.state.time - 1 }) : this.state.time;
    return newTime;
  };

  getRandomPosition = () => {
    this.setState({
      random: {
        marginTop: getRandomNumb(),
        marginLeft: getRandomNumb()
      }
    });
  };

  comparePosition = () => {
    if (this.state.marginLeft === this.state.random.marginLeft && this.state.marginTop === this.state.random.marginTop) {
      this.getRandomPosition();
      this.setState({ points: this.state.points + 1 });
    }
  };

  clickToStart = () => {
    this.mainFunction();
    if (this.state.time !== 0) {
      setInterval(this.getRandomPosition, 3000);
    } else {
      clearInterval(setInterval(this.getRandomPosition, 3000));
    }
  };

  changePosition = (e) => {
    switch (e.keyCode) {
      case 37:
        this.state.marginLeft !== 0
          ? this.setState({ marginLeft: this.state.marginLeft - 20 })
          : this.setState({ marginLeft: this.state.marginLeft });
        break;
      case 38:
        this.state.marginTop !== 0
          ? this.setState({ marginTop: this.state.marginTop - 20 })
          : this.setState({ marginTop: this.state.marginTop });
        console.log(this.state);
        break;
      case 39:
        this.state.marginLeft !== 420
          ? this.setState({ marginLeft: this.state.marginLeft + 20 })
          : this.setState({ marginLeft: this.state.marginLeft });
        console.log(this.state);
        break;
      case 40:
        this.state.marginTop !== 420
          ? this.setState({ marginTop: this.state.marginTop + 20 })
          : this.setState({ marginTop: this.state.marginTop });
        console.log(this.state);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        { `Points: ${ this.state.points } Time:${ this.state.time }` }
        <div className={ style.game }>
          <PlayerSquare changePosition={ this.changePosition } param={ this.state } clickToStart={ this.clickToStart }/>
          <RandomSquare param={ this.state.random }/>
        </div>
      </>
    )
  }
}

export default Game;