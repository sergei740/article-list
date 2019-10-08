import React, { useState } from "react";
import Article from "../Article/Article";

export default function ArticleList({ articles }) {
  const [openArticleId, changeArticleId] = useState(articles[0].id);
  const changeOpenArticleId = id => openArticleId === id ? changeArticleId(null) : changeArticleId(id);
  const articleList = articles.map(article => {
    return (
      <Article
        article={ article }
        isOpen={ openArticleId === article.id }
        changeOpenArticleId={ changeOpenArticleId }
      />
    );
  });
  return <ul>{ articleList }</ul>;
}