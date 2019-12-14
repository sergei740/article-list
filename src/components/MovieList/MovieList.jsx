import React, { Component } from 'react';
import MovieCard from "../MovieCard/MovieCard";
import { loadData } from '../../services/httpService';
import style from './style.module.css';

class MovieList extends Component {
  state = {
    movies: [],
    inputTitle: ''
  };

  handleChange = (e) => {
    this.setState({ inputTitle: e.target.value });
  };

  loadMovies = (e) => {
    e.preventDefault();
    loadData(this.state.inputTitle.trim())
      .then(({ response }) => {
        this.setState({
          movies: JSON.parse(response).Search,
          inputTitle: ''
        });
      })
      .catch(({ response }) => {
        this.setState({ movies: response });
      });
  };


  render() {
    const posterList = this.state.movies !== undefined
      ? this.state.movies.map(item => {
        return item.Poster !== 'N/A'
          ? <MovieCard key={ item.imdbID } src={ item.Poster } title={ item.Title } year={ item.Year }/>
          : null;
      })
      : <div className={ style.error_text }>Movie with this title not found</div>;

    return (
      <div className={ style.movie_list }>
        <form className={ style.block_input_title } onSubmit={ this.loadMovies }>
          <input placeholder='Type Movie Title' value={ this.state.inputTitle } onChange={ this.handleChange }/>
          <button className='btn btn-outline-info btn-sm' disabled={ !this.state.inputTitle }>Show Movies</button>
        </form>
        <div className={ style.block_poster_list }>
          { posterList }
        </div>
      </div>
    )
  }
}

export default MovieList;