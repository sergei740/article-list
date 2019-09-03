import React from 'react';
import Article from './Article';


function ArticleList({ articles }) {
  const articlesList = articles.map((article, index) => {
    return <li key={ article.id }><Article article={ article } defaultOpen={ index === 0 }/></li>
  });
  return (
    <ul className='list-unstyled'>
      { articlesList }
    </ul>
  )
}

export default ArticleList;