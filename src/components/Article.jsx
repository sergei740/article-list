import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen
    }
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isOpen !== nextState.isOpen;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.state.defaultOpen) {
      this.setState({ isOpen: nextProps.defaultOpen })
    }
  };

  render() {
    const { article } = this.props;
    const style = { width: '60%' };
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