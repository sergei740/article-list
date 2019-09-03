import React, { Component } from 'react';
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from "./Articles";
import SideBar from "./SideBar";
import Header from "./Header";


class App extends Component {
  state = {
    reverted: false,
    articles,
    isOpenCreateNewArticle: false,
    isFilterOpen: false
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
    articles.push(newArticle);
    this.setState({
      articles: [...articles],
      isOpenCreateNewArticle: !this.state.isOpenCreateNewArticle
    });
  };

  openCreateNewArticle = () => {
    this.setState({ isOpenCreateNewArticle: !this.state.isOpenCreateNewArticle })
  };

  openFilter = () => {
    this.setState({ isFilterOpen: !this.state.isFilterOpen })
  };


  render() {
    return (
      <div className='container'>
        <Header/>
        <div className='row m-0'>
          <SideBar/>
          <Articles handleChange={ this.handleChange }
                    handleSubmit={ this.handleSubmit }
                    articles={ this.state.reverted ? this.state.articles.slice().reverse() : this.state.articles }
                    isOpenCreateNewArticle={ this.state.isOpenCreateNewArticle }
                    isFilterOpen={ this.state.isFilterOpen }
                    openCreateNewArticle={ this.openCreateNewArticle }
                    revert={ this.revert }
                    openFilter={ this.openFilter }/>
        </div>
      </div>
    )
  }
}

export default App;