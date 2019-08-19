import React from 'react';
import ArticleList from './ArticleList';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1 className='display-3'>Articles</h1>
      </div>
      <ArticleList/>
    </div>
  )
}

export default App;