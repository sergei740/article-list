import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='jumbotron mb-4'>
        <h1 className='display-4 text-left'>
          { this.props.headerText }
        </h1>
      </div>
    )
  }
}

export default Header;