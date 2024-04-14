// src/api/newsApi.js

const fetchNewsArticles = async (keyword) => {
  const apiKey = "cfe87fdafdb949208eb28f3fbb2926c7";
  const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    throw new Error("Failed to fetch news articles");
  }
};

export default fetchNewsArticles;
