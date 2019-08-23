import React from 'react';

function ArticleFilter(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">Filter Articles</span>
      </div>
      <input type="text" onChange={ props.onHandleChange } className="form-control" aria-label="Default"
             aria-describedby="inputGroup-sizing-default"/>
    </div>
  )
}

export default ArticleFilter;
