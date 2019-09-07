import React, { Component } from 'react';
import style from './style.module.css';

class MovieCard extends Component {
  state = {
    isOpenDescription: false,
  };


  toggleDescription = () => {
    this.setState({ isOpenDescription: !this.state.isOpenDescription });
  };


  render() {
    return (
      <div className={ style.item_wrapper }>
        <div key={ this.props.id } className={ style.item }>
          <img src={ this.props.src } alt={ this.props.title }/>
          { this.state.isOpenDescription ? <div className={ style.sub_item }>{ `Title: ${ this.props.title }
           Year: ${ this.props.year }` }</div> : null }
        </div>
        <button onClick={ this.toggleDescription } className='btn btn-outline-primary'>Info</button>
      </div>
    )
  }
}

export default MovieCard;