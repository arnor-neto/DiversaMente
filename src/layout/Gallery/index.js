import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";

const Gallery = () => {
  const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.Title>Glossário</S.Title>
        <div style={{ width: "60.3px" }}></div>
      </S.Header>
      <S.Content>
        {set.map(() => {
          return (
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
              <S.Title2>Placeholder</S.Title2>
            </S.ItemWrapper>
          );
        })}
      </S.Content>
    </S.Wrapper>
  );
};

export default Gallery;
