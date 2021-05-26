import * as S from "./styled";

const ArticlePreview = ({ articleURL, imgURL, title, content }) => {
  const openURL = () => {
    window.open(articleURL, "_blank");
  };

  return (
    <S.Wrapper onClick={openURL}>
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
