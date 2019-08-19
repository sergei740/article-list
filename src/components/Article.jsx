import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true
    }
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };


  render() {
    const articleText = this.state.isOpen && this.props.text;
    const buttonText = this.state.isOpen ? 'Hide Text' : 'Show Text';
    return (
      <div>
        <h2>
          { this.props.title }
          <button onClick={ this.handleClick }>{ buttonText }</button>
        </h2>
        <p>{ articleText }</p>
        <p>creation date:{ (new Date(this.props.date)).toDateString() }</p>
      </div>
    )
  }
}


export default Article;