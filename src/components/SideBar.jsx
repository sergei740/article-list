import React from 'react';
import { NavLink } from "react-router-dom";

function SideBar(props) {
  return (
    <div className='col-sm-2 p-2 text-center jumbotron font-weight-bold'>
      <NavLink to='/articles' onClick={ props.onClickNavLink }>
        <div className='font-weight-normal'>Articles</div>
      </NavLink>
      <NavLink to='/movies' onClick={ props.onClickNavLink }>
        <div className='font-weight-normal'>Movies</div>
      </NavLink>
    </div>
  )
}

export default SideBar;