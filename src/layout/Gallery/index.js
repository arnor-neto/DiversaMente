import * as S from "./styled";
import ReturnButton from "../../components/ReturnButton";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Context } from "../../GlobalContext";
import SearchBar from "../../components/SearchBar";

const Gallery = () => {
  let history = useHistory();
  const context = useContext(Context);

  const [cards, setCards] = useState([]);
  const [displayedCards, setDisplayedCards] = useState(cards);
  const [searchTerm, setSearchTerm] = useState("");

  const selectCard = (id) => {
    context.selectedCardID.set(id);
    history.push("/details");
  };

  useEffect(() => {
    axios
      .get("https://diversamente-api.herokuapp.com/api/cards/list")
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((err) => {
        console.log("erro");
      });
  }, []);

  useEffect(() => {
    let filteredCards = cards.filter((card) => {
      return card.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDisplayedCards(filteredCards);
  }, [cards, searchTerm]);

  return (
    <S.Wrapper>
      <S.Header>
        <ReturnButton />
        <S.Title>Glossário</S.Title>
        <div style={{ width: "60.3px" }}></div>
        <SearchBar value={searchTerm} setValue={setSearchTerm} />
      </S.Header>
      <S.Content>
        {displayedCards.map((card, index) => {
          return (
            <S.ItemWrapper
              key={index}
              onClick={() => {
                selectCard(card.id);
              }}
            >
              <S.CardContainer>
                <S.CardInner>
                  <S.CardImg src={card.image} />
                </S.CardInner>
              </S.CardContainer>
              <S.Title2>{card.name}</S.Title2>
            </S.ItemWrapper>
          );
        })}
      </S.Content>
    </S.Wrapper>
  );
};

export default Gallery;
