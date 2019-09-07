import React, { Component } from 'react';
import style from './style.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ style.block_header }>
        <h1 className='display-4 text-left'>
          { this.props.headerText }
        </h1>
      </div>
    )
  }
}

export default Header;