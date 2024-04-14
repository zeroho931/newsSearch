import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const ArticleList = ({ articles, onLoadMore }) => {
  return (
    <div>
      {articles.map((article, index) => (
        <div key={article.title}>
          {/* 기사 내용 표시 */}
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          {/* 마지막 기사 요소에 InfiniteScroll 컴포넌트 적용 */}
          {index === articles.length - 1 && (
            <InfiniteScroll onLoadMore={onLoadMore} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
