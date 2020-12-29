import React, { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import Banner from "./components/Banner";
import getNews from "./services/getNews";
import styled from "styled-components";

const StyledList = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  padding-top: 130px;
`;

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNewsData = async () => {
      const newsData = await getNews();
      setNews(newsData);
    };
    getNewsData();
  }, []);

  return (
    <div>
      <Banner />
      <StyledList>
        {news.map((data, idx) => (
          <NewsCard
            key={idx}
            title={data.title}
            content={data.content}
            url={data.url}
            author={data.author}
            image={data.urlToImage}
            published={data.publishedAt}
          />
        ))}
      </StyledList>
    </div>
  );
}

export default App;
