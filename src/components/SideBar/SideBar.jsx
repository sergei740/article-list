import React from 'react';
import style from './style.module.css';
import { NavLink } from "react-router-dom";

function SideBar(props) {
  return (
    <div className={ props.secondStyle ? style.side_bar : style.side_bar_second }>
      <NavLink to='/' onClick={ props.onClickNavLink }>
        <div className={ props.secondStyle ? style.side_bar_link : style.side_bar_link_second }>ARTICLES</div>
      </NavLink>
      <NavLink to='/movies' onClick={ props.onClickNavLink }>
        <div className={ props.secondStyle ? style.side_bar_link : style.side_bar_link_second }>MOVIES</div>
      </NavLink>
    </div>
  )
}

export default SideBar;