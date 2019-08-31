import React, { Component } from 'react';
import ArticleList from './ArticleList';
import ArticleFilter from './ArticleFilter';
import CreateNewArticle from './CreateNewArticle';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  state = {
    reverted: false,
    articles: articles,
    isOpenCreateNewArticle: false
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

  handleSubmit = (newArticle) => {
    console.log(newArticle);
    this.setState({ articles: [...this.state.articles, newArticle], isOpenCreateNewArticle: !this.state.isOpenCreateNewArticle });
  };

  openCreateNewArticle = () => {
    this.setState({ isOpenCreateNewArticle: !this.state.isOpenCreateNewArticle })
  };

  render() {
    const textForNewArticle = this.state.isOpenCreateNewArticle ? 'Hide' : 'New article';
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3'>
            Articles
            <button className='btn btn-primary ml-3'
                    onClick={ this.openCreateNewArticle }>{ textForNewArticle }</button>
            <button className='btn btn-dark ml-3' onClick={ this.revert }>Revert</button>
          </h1>
        </div>
        { this.state.isOpenCreateNewArticle ? <CreateNewArticle handleSubmit={ this.handleSubmit }/> : null }
        <ArticleFilter onHandleChange={ this.handleChange }/>
        <ArticleList articles={ this.state.reverted ? this.state.articles.slice().reverse() : this.state.articles }/>
      </div>
    )
  }
}

export default App;