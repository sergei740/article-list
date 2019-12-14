import React from 'react';
import style from './style.module.css';

function Header(props) {
  return (
    <div className={ props.secondStyle ? style.block_header : style.block_header_second }>
      <h1 className='display-4 text-left'>
        { props.headerText }
      </h1>
      <div>
        <button onClick={ props.changeStyle } className='btn btn-warning'>Change Theme</button>
      </div>
    </div>
  )
}

export default Header;