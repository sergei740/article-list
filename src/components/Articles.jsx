import React from 'react';
import ArticleList from './ArticleList';
import ArticleFilter from './ArticleFilter';
import CreateNewArticle from './CreateNewArticleForm';

function Articles(props) {
  const textForNewArticleButton = props.isOpenCreateNewArticle ? 'Hide' : 'New article';
  const textForFilterButton = props.isFilterOpen ? 'Hide' : 'Show';
  return (
    <div className='col-lg-10 pr-0'>
      <div className='d-flex justify-content-center mb-4 pt-4 pb-4 bg-light rounded'>
        <button className='btn btn-primary btn-lg'
                onClick={ props.openCreateNewArticle }>{ textForNewArticleButton }</button>
        <button className='btn btn-primary ml-3 btn-lg'
                onClick={ props.openFilter }>{ `${ textForFilterButton } Filter` }</button>
        <button className='btn btn-secondary ml-3 btn-lg' onClick={ props.revert }>Revert Articles</button>
      </div>
      { props.isOpenCreateNewArticle ? <CreateNewArticle handleSubmit={ props.handleSubmit }/> : null }
      { props.isFilterOpen ? <ArticleFilter handleChange={ props.handleChange }/> : null }
      <ArticleList articles={ props.articles }/>
    </div>
  )
}

export default Articles;