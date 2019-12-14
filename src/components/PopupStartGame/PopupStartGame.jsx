import React from "react";
import style from "./style.module.css";
import CloseIcon from "@material-ui/icons/Close";


const PopupStartGame = (props) => {
  return (
    <div className={ style.popup }>
      <div className={ style.popup_inner }>
        <button onClick={ props.closePopup } className={ style.exit_button }>
          <CloseIcon>Close</CloseIcon>
        </button>
        <div className={ style.popup_text }>
          <h1>Rules of the Game</h1>
          <p>{ `Use the arrows on your keyboard to control the green cube.
                You need to catch a green cube purple cube after purple cube changes position.
                For this you get 1 point, the game lasts 60 seconds` }</p>
        </div>
        <div>
          <button className='btn btn-lg btn-outline-primary'
                  onClick={ props.startGameBtn }>START GAME
          </button>
        </div>
      </div>
    </div>
  )
};

export default PopupStartGame;