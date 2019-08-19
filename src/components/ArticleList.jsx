import React from 'react';
import Article from './Article';
import articles from '../fixtures';


function ArticleList() {
  const articlesList = articles.map((article) => {
    return <li key={ article.id }><Article article={ article }/></li>
  });
  return (
    <ul className='list-unstyled'>
      { articlesList }
    </ul>
  )
}

export default ArticleList;