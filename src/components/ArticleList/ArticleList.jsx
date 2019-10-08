import React, { useState } from "react";
import Article from "../Article/Article";
import style from './style.module.css'

export default function ArticleList({ articles }) {
  const [openArticleId, changeArticleId] = useState(articles[0].id);
  const changeOpenArticleId = id => openArticleId === id ? changeArticleId(null) : changeArticleId(id);
  const articleList = articles.map(article => {
    return (
      <li key={ article.id }>
        <Article article={ article }
                 isOpen={ openArticleId === article.id }
                 changeOpenArticleId={ changeOpenArticleId }/>
      </li>
    );
  });
  return <ul className={style.list}>{ articleList }</ul>;
}