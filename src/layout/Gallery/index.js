import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";

const Gallery = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.Title>Glossário</S.Title>
        <div style={{ width: "11%" }}></div>
      </S.Header>
      <S.Content>
        <S.ItemWrapper>
          <S.CardContainer>
            <S.CardInner>
              <S.CardImg
                src={
                  "https://cdn.shopify.com/s/files/1/1082/1624/products/lgbtrainbow.png?v=1601914036"
                }
              />
            </S.CardInner>
          </S.CardContainer>
          <S.Title2>Rainbow</S.Title2>
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.CardContainer>
            <S.CardInner>
              <S.CardImg
                src={
                  "https://cdn.shopify.com/s/files/1/1082/1624/products/lgbtrainbow.png?v=1601914036"
                }
              />
            </S.CardInner>
          </S.CardContainer>
          <S.Title2>Rainbow</S.Title2>
        </S.ItemWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Gallery;
