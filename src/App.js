import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import DateFilter from "./components/DateFilter";
import fetchNewsArticles from "./api/newsApi"; // newsApi 파일 import

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (keyword) => {
    try {
      setLoading(true);
      const articles = await fetchNewsArticles(keyword);
      setArticles(articles);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSearch = (keyword) => {
    fetchData(keyword); // 검색어로 데이터 가져오기
  };

  const handleLoadMore = async () => {
    // 더 많은 기사를 가져오는 로직 구현
    console.log("Loading more articles...");
    // 예시: 현재 불러온 기사의 다음 페이지를 불러오는 등의 로직을 구현
  };

  const applyDateFilter = (startDate, endDate) => {
    const filtered = articles.filter((article) => {
      const articleDate = new Date(article.publishedAt).getTime();
      return (
        articleDate >= new Date(startDate).getTime() &&
        articleDate <= new Date(endDate).getTime()
      );
    });
    setArticles(filtered);
  };

  return (
    <div>
      <h1>News Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <DateFilter onApplyFilter={applyDateFilter} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ArticleList articles={articles} onLoadMore={handleLoadMore} />
      )}
    </div>
  );
};

export default App;
