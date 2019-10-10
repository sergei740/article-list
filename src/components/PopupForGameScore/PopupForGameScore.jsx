import React from 'react';
import style from './style.module.css';
import CloseIcon from '@material-ui/icons/Close';

const PopupForGameScore = (props) => {
  return (
    <div className={ style.popup }>
      <div className={ style.popup_inner }>
        <h1>{ `Game is over!
                Your score: ${ props.score }` }</h1>
        <button onClick={ props.closePopup } className={ style.exit_button }>
          <CloseIcon>Close</CloseIcon>
        </button>
      </div>
    </div>
  );
}

export default PopupForGameScore;