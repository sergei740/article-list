import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import articles from '../fixtures';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from "./Articles";
import SideBar from "./SideBar";
import Header from "./Header";
import Movies from "./Movies";


class App extends Component {
  state = {
    reverted: false,
    articles,
    isOpenCreateNewArticle: false,
    isFilterOpen: false,
    headerText: document.location.pathname.slice(1).charAt(0).toUpperCase() + document.location.pathname.slice(2)
  };

  updateHeaderText = () => {
    setTimeout(() => {
      this.setState({ headerText: document.location.pathname.slice(1).charAt(0).toUpperCase() + document.location.pathname.slice(2) });
    });
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
    this.setState({ isOpenCreateNewArticle: !this.state.isOpenCreateNewArticle, isFilterOpen: false })
  };

  openFilter = () => {
    this.setState({ isFilterOpen: !this.state.isFilterOpen, isOpenCreateNewArticle: false });
  };

  render() {
    return (
      <BrowserRouter>
        <div className='container m-auto'>
          <Header headerText={ this.state.headerText }/>
          <div className='row m-0'>
            <SideBar onClickNavLink={ this.updateHeaderText }/>
            <Route path='/articles' render={ () => <Articles handleChange={ this.handleChange }
                                                             handleSubmit={ this.handleSubmit }
                                                             articles={ this.state.reverted ? this.state.articles.slice().reverse() : this.state.articles }
                                                             isOpenCreateNewArticle={ this.state.isOpenCreateNewArticle }
                                                             isFilterOpen={ this.state.isFilterOpen }
                                                             openCreateNewArticle={ this.openCreateNewArticle }
                                                             revert={ this.revert }
                                                             openFilter={ this.openFilter }/> }/>
            <Route path='/movies' component={ Movies }/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;