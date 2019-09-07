import React from 'react';
import ArticleList from '../ArticleList';
import ArticleFilter from '../ArticleFilter';
import CreateNewArticle from '../CreateNewArticleForm';
import style from './style.module.css';

function Articles(props) {
  const textForNewArticleButton = props.isOpenCreateNewArticle ? 'Hide' : 'New article';
  const textForFilterButton = props.isFilterOpen ? 'Hide' : 'Show';
  return (
    <div className={ style.articles_list }>
      <div className={ style.block_buttons }>
        <button className='btn btn-outline-primary btn-lg'
                onClick={ props.openCreateNewArticle }>{ textForNewArticleButton }</button>
        <button className='btn btn-outline-primary btn-lg'
                onClick={ props.openFilter }>{ `${ textForFilterButton } Filter` }</button>
        <button className='btn btn-outline-secondary btn-lg' onClick={ props.revert }>Revert Articles</button>
      </div>
      { props.isOpenCreateNewArticle ? <CreateNewArticle handleSubmit={ props.handleSubmit }/> : null }
      { props.isFilterOpen ? <ArticleFilter handleChange={ props.handleChange }/> : null }
      <ArticleList articles={ props.articles }/>
    </div>
  )
}

export default Articles;