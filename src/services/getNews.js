async function getNews() {
  const url =
    "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=9929a58f487a4a96b6003f7b9c9c2309";

  const data = await fetch(url);
  const news = await data.json();
  return news.articles;
}

export default getNews;
