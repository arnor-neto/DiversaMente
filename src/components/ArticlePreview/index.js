import * as S from "./styled";

const ArticlePreview = ({ imgURL, title, content }) => {
  return (
    <S.Wrapper>
      <S.ArticleImgContainer>
        <S.ArticleImg src={imgURL} />
      </S.ArticleImgContainer>
      <S.ArticleContent>
        <S.Title>{title}</S.Title>
        <S.P>{content}</S.P>
      </S.ArticleContent>
    </S.Wrapper>
  );
};

export default ArticlePreview;
