import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import { loadData } from '../../services/httpService';
import getTransformStr from '../../getTransformStr';
import style from './style.module.css';


class MovieList extends Component {
  state = {
    movies: [],
    inputTitle: ''
  };

  handleChange = (e) => {
    this.setState({ inputTitle: e.target.value });
    console.log(this.state.inputTitle);
  };

  loadMovies = () => {
    loadData(getTransformStr(this.state.inputTitle))
      .then(({ response }) => {
        this.setState({ movies: JSON.parse(response).Search });
        console.log(JSON.parse(response).Search);
      })
      .catch(({ response }) => {
        alert(response);
      });
  };


  render() {
    const posterList = this.state.movies.map(item => {
      return item.Poster !== 'N/A'
        ? <MovieCard key={ item.imdbID } src={ item.Poster } title={ item.Title } year={ item.Year }/>
        : null;
    });

    return (
      <div className={ style.movie_list }>
        <div className={ style.block_input_title }>
          <div>
            <input placeholder='Type Movie Title' onChange={ this.handleChange }/>
          </div>
          <div>
            <button className='btn btn-outline-info btn-sm' onClick={ this.loadMovies }
                    disabled={ !this.state.inputTitle }>Show Movies
            </button>
          </div>
        </div>
        <div className={ style.block_poster_list }>
          { posterList }
        </div>
      </div>
    )
  }
}

export default MovieList;