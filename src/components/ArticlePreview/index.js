import * as S from "./styled";

const ArticlePreview = ({ articleURL, imgURL, title, content }) => {
  return (
    <S.Wrapper>
      <S.ArticleImgContainer>
        <S.ArticleImg src={imgURL} />
      </S.ArticleImgContainer>
      <S.ArticleContent>
        <S.Title>{title}</S.Title>
        <S.P>{content}</S.P>
        <S.Link
          href={articleURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar artigo
        </S.Link>
      </S.ArticleContent>
    </S.Wrapper>
  );
};

export default ArticlePreview;
