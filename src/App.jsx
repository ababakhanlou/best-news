import React, { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import Banner from "./components/Banner";
import getNews from "./services/getNews";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const newsData = getNews();
    setNews(newsData);
  }, []);

  //console.log(news[0].description);

  return (
    <div>
      <Banner />
      {news.map((data, idx) => (
        <NewsCard
          key={idx}
          title={data.title}
          description={data.description}
          url={data.url}
          author={data.author}
          image={data.image}
          category={data.category}
          published={data.published}
        />
      ))}
    </div>
  );
}

export default App;
