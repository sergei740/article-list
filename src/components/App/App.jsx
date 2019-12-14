import React, { Component } from 'react';
import style from './style.module.css';
import { HashRouter, Route } from "react-router-dom";
import articles from '../../fixtures';
import 'bootstrap/dist/css/bootstrap.css';
import Articles from "../Articles/Articles";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import MovieList from "../MovieList/MovieList";
import Game from '../Game/Game';

class App extends Component {
  state = {
    reverted: false,
    articles,
    isOpenCreateNewArticle: false,
    isFilterOpen: false,
    headerText: '',
    secondStyle: true
  };

  updateHeaderText = () => {
    setTimeout(() => {
      const path = window.location.href;
      if (path.includes('movies')) {
        this.setState({ headerText: 'Movies' });
      } else if (path.includes('game')) {
        this.setState({ headerText: 'Game' });
      } else {
        this.setState({ headerText: 'Articles' });
      }
    });
  };

  componentDidMount() {
    this.updateHeaderText();
  };

  revert = () => {
    this.setState({ reverted: !this.state.reverted });
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

  changeStyle = () => {
    this.setState({ secondStyle: !this.state.secondStyle });
  };

  render() {
    return (
      <HashRouter basename={ process.env.PUBLIC_URL }>
        <div className={ style.main_container }>
          <Header headerText={ this.state.headerText }
                  changeStyle={ this.changeStyle }
                  secondStyle={ this.state.secondStyle }/>
          <div className={ style.main_content_container }>
            <SideBar onClickNavLink={ this.updateHeaderText } secondStyle={ this.state.secondStyle }/>
            <Route exact path='/'
                   render={ () => <Articles handleChange={ this.handleChange }
                                            handleSubmit={ this.handleSubmit }
                                            articles={ this.state.reverted ? this.state.articles.slice().reverse() : this.state.articles }
                                            isOpenCreateNewArticle={ this.state.isOpenCreateNewArticle }
                                            isFilterOpen={ this.state.isFilterOpen }
                                            openCreateNewArticle={ this.openCreateNewArticle }
                                            revert={ this.revert }
                                            openFilter={ this.openFilter }/> }/>
            <Route path='/movies' component={ MovieList }/>
            <Route path='/game' component={ Game }/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App;