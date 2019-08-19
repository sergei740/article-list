import React, { Component } from 'react';

class Article extends Component {
  state = {
    isOpen: true
  };


  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };


  render() {
    const { article } = this.props;
    const style = { width: '50%' }
    const articleText = this.state.isOpen && <section className='card-text'>{ article.text }</section>;
    const buttonText = this.state.isOpen ? 'Hide Text' : 'Show Text';
    return (
      <div className='card mx-auto' style={ style }>
        <div className='card-header'>
          <h2>
            { article.title }
            <button onClick={ this.handleClick } className='btn btn-primary btn-lg float-right'>{ buttonText }</button>
          </h2>
        </div>
        <div className='card-body'>
          { articleText }
          <h6 className='card-subtitle text-muted'>creation date:{ (new Date(article.date)).toDateString() }</h6>
        </div>
      </div>
    )
  }
}


export default Article;