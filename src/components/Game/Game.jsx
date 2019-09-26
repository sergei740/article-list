import React, { Component } from 'react';
import RotateRightSharpIcon from '@material-ui/icons/RotateRightSharp';
import style from './style.module.css';
import PlayerSquare from '../PlayerSquare/PayerSuare';
import RandomSquare from '../RandomSquare/RandomSquare';
import getRandomNumb from '../../getRandomNumb';
import PopupForGame from '../PopupForGame/PopupForGame';

class Game extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      time: 0,
      points: 0,
      marginTop: getRandomNumb(),
      marginLeft: getRandomNumb(),
      random: {
        marginTop: getRandomNumb(),
        marginLeft: getRandomNumb()
      },
      showPopup: false
    };
    this.interval2 = null;
    this.interval3 = null;
  }

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  interval = (isAlreadySetted = false) => {
    if (isAlreadySetted) {
      clearInterval(this.interval2);
    }
    this.interval2 = setInterval(() => {
      this.getRandomPosition();
    }, 3000);
  };

  timer = () => {
    if (this.state.time !== 0) {
      this.setState({ time: this.state.time - 1 })
    } else{
      clearInterval(this.interval3);
      this.togglePopup();
    }
    // const newTime = this.state.time !== 0 ? this.setState({ time: this.state.time - 1 }) : this.state.time;
    // return newTime;
  };

  startTimer = (isAlreadySetted = false) => {
    if (isAlreadySetted) {
      clearInterval(this.interval3);
    }
    this.interval3 = setInterval(() => {
      this.timer();
    }, 1000);
  };

  getRandomPosition = () => {
    if (this.state.time === 0) this.stopGame();
    this.setState({
      random: {
        marginTop: getRandomNumb(),
        marginLeft: getRandomNumb()
      }
    });
  };

  comparePosition = () => {
    if (this.state.marginLeft === this.state.random.marginLeft && this.state.marginTop === this.state.random.marginTop) {
      this.setState({ points: this.state.points + 1 });
      this.getRandomPosition();
      this.interval(true);
    }
  };

  stopGame = () => {
    clearInterval(this.interval2);
    clearInterval(this.interval3);
  };

  restartGame = () => {
    this.stopGame();
    this.myRef.current.focus();
    this.setState({ time: 60, points: 0 });
    this.startTimer();
  };

  startGame = () => {
    this.myRef.current.focus();
    this.setState({ time: 60, points: 0 });
    this.startTimer();
    this.interval();
  };

  changePosition = (e) => {
    if (this.state.time !== 0) {
      switch (e.keyCode) {
        case 37:
          return this.state.marginLeft !== 0
            ? this.setState({ marginLeft: this.state.marginLeft - 30 }, () => {
              this.comparePosition();
            })
            : null;
        case 38:
          return this.state.marginTop !== 0
            ? this.setState({ marginTop: this.state.marginTop - 30 }, () => {
              this.comparePosition();
            })
            : null;
        case 39:
          return this.state.marginLeft !== 420
            ? this.setState({ marginLeft: this.state.marginLeft + 30 }, () => {
              this.comparePosition();
            })
            : null;
        case 40:
          return this.state.marginTop !== 420
            ? this.setState({ marginTop: this.state.marginTop + 30 }, () => {
              this.comparePosition();
            })
            : null;
        default:
          break;
      }
    }
  };

  render() {
    return (
      <div className={ style.game_wrapper }>
        { this.state.showPopup ? <PopupForGame score={ this.state.points } closePopup={ this.togglePopup }/> : null }
        <div className={ style.game_info }>
          <div className={ style.game_info_children }>{ `TIME:${ this.state.time }` }</div>
          <div className={ style.game_info_children }>{ `POINTS: ${ this.state.points }` }</div>
          <button className='btn btn-lg btn-outline-primary'
                  onClick={ this.startGame }
                  disabled={ this.state.time !== 0 }>START GAME
          </button>
          <button className='btn btn-sm btn-outline-danger'
                  onClick={ () => {
                    this.stopGame();
                    this.togglePopup()
                  } }
                  disabled={ this.state.time === 0 }>STOP GAME
          </button>
          <button className={ style.restart_button } onClick={ this.restartGame }>
            <RotateRightSharpIcon>Restart</RotateRightSharpIcon>
          </button>
        </div>
        <div className={ style.game }>
          <PlayerSquare changePosition={ this.changePosition } param={ this.state } focus={ this.myRef }/>
          <RandomSquare param={ this.state.random }/>
        </div>
      </div>
    )
  }
}

export default Game;