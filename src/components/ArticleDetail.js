// src/components/ArticleDetail.js

import React from "react";

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      {article.author && <p>Author: {article.author}</p>}
      {article.publishedAt && <p>Published At: {article.publishedAt}</p>}
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="Article"
          style={{ maxWidth: "100%" }}
        />
      )}
      {article.content && <p>{article.content}</p>}
      {article.url && (
        <p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </p>
      )}
    </div>
  );
};

export default ArticleDetail;
