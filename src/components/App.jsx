import React, { Component } from 'react';
import ArticleList from './ArticleList';
import ArticleFilter from './ArticleFilter';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  state = {
    reverted: false,
    articles: articles
  };

  revert = () => {
    this.setState({ reverted: !this.state.reverted })
  };

  handleChange = e => {
    this.setState({
      articles: articles.filter(elem => {
        return elem.title.toLowerCase().includes(e.target.value.toLowerCase());
      })
    })
  };

  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3'>
            Articles
            <button className='btn btn-dark ml-3' onClick={ this.revert }>Revert</button>
          </h1>
        </div>
        <ArticleFilter onHandleChange={ this.handleChange }/>
        <ArticleList articles={ this.state.reverted ? this.state.articles.slice().reverse() : this.state.articles }/>
      </div>
    )
  }
}

export default App;