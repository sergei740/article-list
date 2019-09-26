import React from 'react';
import style from './style.module.css'

function PlayerSquare(props) {
  return (
    <div tabIndex='0' className={ style.playerSquare } style={ props.param }
         onKeyDown={ props.changePosition } onClick={ props.clickToStart } ref={ props.focus }></div>
  )
}

export default PlayerSquare;