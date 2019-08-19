import React from 'react';
import Article from './Article';
import articles from '../fixtures';


function ArticleList() {
  return (
    articles.map((article)=>{
      return <Article key={article.id} title={article.title} text={article.text} date={article.date}/>
    })
  )
}

export default ArticleList;