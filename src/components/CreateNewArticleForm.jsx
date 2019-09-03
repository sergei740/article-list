import React, { Component } from 'react';
import getRandomString from '../getRandomId';

class CreateNewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      date: '',
      title: '',
      text: ''

    }
  }

  onHandleChangeDate = () => {
    this.setState({ id: getRandomString(24) })
    this.setState({ date: new Date() });
  };

  onHandleChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  onHandleChangeText = (e) => {
    this.setState({ text: e.target.value });
  };

  clearInputs = () => {
    this.setState({ id: '', date: '', title: '', text: '' })
  };


  render() {
    return (
      <form onSubmit={ (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this.clearInputs();
      } }>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Article Title</span>
          </div>
          <input type="text" value={ this.state.title } className="form-control" aria-label="Default"
                 aria-describedby="inputGroup-sizing-default" onChange={ this.onHandleChangeTitle }/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Article Text</label>
          <textarea className="form-control" value={ this.state.text } onChange={ this.onHandleChangeText }></textarea>
        </div>
        <button type="submit" className="btn btn-primary mb-2" onClick={ this.onHandleChangeDate }>Add article
        </button>
      </form>
    )
  }
}

export default CreateNewArticleForm;