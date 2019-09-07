import React from 'react';
import style from './style.module.css';
import { NavLink } from "react-router-dom";

function SideBar(props) {
  return (
    <div className={ style.side_bar }>
      <NavLink to='/articles' onClick={ props.onClickNavLink }>
        <div className={ style.side_bar_link }>ARTICLES</div>
      </NavLink>
      <NavLink to='/movies' onClick={ props.onClickNavLink }>
        <div className={ style.side_bar_link }>MOVIES</div>
      </NavLink>
    </div>
  )
}

export default SideBar;