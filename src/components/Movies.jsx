import React, { Component } from 'react';
import getRandomId from '../getRandomId';

class Movies extends Component {
  state = {
    isOpenDescription: false,
    posters: [
      {
        src: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        id: getRandomId(10)
      },
      {
        src: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        id: getRandomId(10)
      },
      {
        src: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        id: getRandomId(10)
      },
      {
        src: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        id: getRandomId(10)
      },
      {
        src: 'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        id: getRandomId(10)
      }
    ]
  };

  openDescription = (e) => {
    // console.log(e.target.id)
    // // this.setState({ isOpenDescription: !this.state.isOpenDescription });
    // this.state.posters.map(item => {
    //   return item.id === e.target.id ? this.setState({item: !this.state.isOpenDescription}) : null;
    // })
    this.setState({ isOpenDescription: !this.state.isOpenDescription });
  };


  render() {
    const posterList = this.state.posters.map(item => {
      return <div key={ item.id } className="card mb-4">
        <img src={ item.src }/>
        { this.state.isOpenDescription ? <div>description</div> : null }
        <button id={ item.id } onClick={ this.openDescription } className='btn btn-secondary'>Description</button>
      </div>
    });

    return (
      <div className='d-flex justify-content-between flex-wrap col-lg-10 pr-0'>
        { posterList }
      </div>
    )
  }
}

export default Movies;