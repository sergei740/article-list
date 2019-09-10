import React from 'react';
import style from './style.module.css';

function RandomSquare(props) {
  return (
    <div className={ style.randomSquare } style={ props.param }></div>
  )
}

export default RandomSquare;