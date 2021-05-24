import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import ArticlePreview from "../../components/ArticlePreview";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=diversidade%20de%20gênero&token=${process.env.REACT_APP_NEWS_API_KEY}&country=br`
      )
      .then((response) => {
        setArticles(response.data.articles);
      });
    return () => {
      setArticles({}); // This worked for me
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.Title>Notícias</S.Title>
        <div style={{ width: "60.3px" }} />
      </S.Header>
      <S.Content>
        {articles.map((article, index) => {
          return (
            <ArticlePreview
              key={index}
              articleURL={article.url}
              imgURL={article.image}
              title={article.title}
              content={article.content}
            />
          );
        })}
      </S.Content>
    </S.Wrapper>
  );
};

export default News;
